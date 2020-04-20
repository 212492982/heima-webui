  <template>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="9">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="12" :offset="2" class="batch-operate">
          <el-button size="mini" type="primary" @click="handleAdd">新增</el-button>
          <el-button size="mini" type="primary" @click="handleExport">导出</el-button>
          <el-button size="mini" type="danger" @click="handleBatchDelete">删除</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData" stripe @selection-change="selectionChange">
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column v-for="(value,key) in columns" :key="key" :prop="key" :label="value"></el-table-column>
        <el-table-column width="210" fixed="right" prop="name" label="操作" v-if="operate">
          <template slot-scope="scope">
            <el-button size="mini" type="warning" @click="handleDetail(scope.row.id)">
              查看
            </el-button>
            <el-button size="mini" type="primary" @click="handleEdit(scope.row.id)">
              编辑
            </el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">
              删除
            </el-button>
          </template>
        </el-table-column>
        <div class="load-more" @click="loadMore" slot="append">
          加载更多
        </div>
      </el-table>

      <el-dialog title="详情" :visible.sync="dialogVisible">
        <el-form ref="formRef" :rules="rules" label-position="left" label-width="80px" :model="detail">
          <el-form-item v-for="(value,key,index) in detail" :key="index" :label="key" :prop="key">
            <el-input :disabled="readonly" v-model="detail[key]"></el-input>
          </el-form-item>
          <el-form-item v-if="readonly">
            <el-button type="info" @click="cancel">关闭</el-button>
          </el-form-item>
          <el-form-item v-else>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-card>
  </template>

<script>
import { list, singleDelete, batchDelete, detail, fields, add, update } from '@/api/user'

export default {
  props: {
    operate: {
      type: Boolean,
      default: true
    },
    alias: {
      type: Object,
      default () {
        return {}
      }
    },
    dropFields: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      selectedIds: [],
      columns: {},
      tableData: [],
      detail: {},
      dialogVisible: false,
      readonly: true,
      rules: {
        name: [
          { required: true, message: '必填项', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '必填项', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.loadMore()
  },
  methods: {
    async handleDetail (id) {
      await this.handleEdit(id)
      this.readonly = true
    },
    async handleEdit (id) {
      await detail(id).then(detail => { this.detail = detail })
      this.readonly = false
      this.dialogVisible = true
    },
    async handleAdd () {
      await fields().then(detail => { this.detail = detail })
      this.readonly = false
      this.dialogVisible = true
    },
    async handleDelete (id) {
      const result = await this.$confirm('是否继续执行删除操作?', '提示', {
        confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'
      }).catch(err => err)
      if (result === 'confirm') {
        singleDelete(id).then(this.$message({ type: 'success', message: '已删除' }))
      } else if (result === 'cancel') {
        this.$message({ type: 'info', message: '取消' })
      }
    },
    selectionChange (rows) {
      this.selectedIds = []
      rows.forEach(row => {
        this.selectedIds.push(row.id)
      })
    },
    async handleBatchDelete () {
      const total = this.selectedIds.length
      if (total < 1) {
        return this.$message({ type: 'warning', message: '请选择需要删除的数据' })
      }
      const result = await this.$confirm('被删除项有' + total + '个，是否继续删除?', '提示', {
        confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'
      }).catch(err => err)
      if (result === 'confirm') {
        batchDelete(this.selectedIds).then(this.$message({ type: 'success', message: '已删除' }))
      } else if (result === 'cancel') {
        this.$message({ type: 'info', message: '取消' })
      }
    },
    handleExport () {
      this.$message({ type: 'warning', message: '敬请期待' })
    },
    loadMore () {
      list().then(res => {
        this.suitColumns(res)
        this.tableData = this.tableData.concat(res)
      })
    },
    suitColumns (datas) {
      datas.forEach(data => {
        for (var field in data) {
          if (this.dropFields.indexOf(field) >= 0) {
            continue
          }
          var aliasName = this.alias[field]
          if (!aliasName) {
            aliasName = field
          }
          if (!this.columns[field]) {
            this.columns[field] = aliasName
          }
        }
      })
    },
    cancel () {
      this.dialogVisible = false
      this.$refs.formRef.resetFields()
    },
    onSubmit () {
      this.$refs.formRef.validate(async valid => {
        if (!valid) return

        const result = await this.$confirm('是否提交?', '提示', {
          confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'
        }).catch(err => err)

        if (result === 'confirm') {
          if (this.detail.id) {
            update(this.detail)
          } else {
            add(this.detail)
          }
        } else if (result === 'cancel') {
          this.$message({ type: 'info', message: '取消' })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.batch-operate {
  display: flex;
  justify-content: flex-end;
}

.load-more {
  text-align: center;
  margin: 10px;
  cursor: pointer;
  user-select: none;
  color: #26f;
}
</style>
