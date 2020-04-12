# heima-webui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# codeLog

- VScode环境
  - Tab Size
    ```
    {
      "editor.tabSize": 2
    }
    ```
  - plugins
    - Vetur (keys: Alt+Shift+F 格式化全文, Ctrl+K-Ctrl+F 格式化选中代码)
    - EsLint (语法)
    - Auto Complete Tag (自动补结束标签或自动修改标签对)
    - JavaScript(ES6) code snippets (ES6语法提示,同时支持ts jsx tsx html vue)
    - HTML CSS Support (html标签写class智能提示当前项目所支持的样式)
    - vue vscode snippets (Vue快捷键显示)
    - Markdown Preview Enhanced (markdown文档预览)

- Vue架构环境
  - 安装nodejs
    - 下载binary包
    - 配置环境变量
    ```vim
      $PATH=$NODE_HOME/bin:$PATH
    ```
  - 安装yarn
    1. 安装
      ```bash
        npm set registry https://registry.npm.taobao.org
        npm i -g yarn
      ```
    2. 配置环境变量
      ```vim
        $PATH=$HOME/.yarn/bin:$PATH
      ```
    3. 配置yarn
      ```bash
        yarn global add yrm
        yrm use taobao
      ```
  - 安装Vue
    ```bash
      yarn global add @vue/cli
    ```
  - 初始化项目
    1. 启动UI
    ```bash
      vue ui
    ```
    2. 创建配置
      - 详情
        - 选择 包管理器 = yarn
        - 选择 无新手指引的脚手架项目
        - 选择 初始化git仓库
        - 可选 若目标文件夹已经存在则将其覆盖
      - 预设
        - 选择 手动
      - 功能
        - 选择 Babel
        - 选择 Router
        - 选择 Linter / Formatter
        - 选择 使用配置文件
        - 其余不选择
      - 配置
        - 不选择 history mode
        - 选择 Pick a linter/formatter config = ESLint + Standard config
        - 选择 Lint on Save
        - 不选择 Lint and fix on commit
      - [可选] 保存为新预设
    3. 依赖配置
      - 插件
        - vue-cli-plugin-element 配置 import on demond (按需加载)
      - 运行依赖
        - axios
      - 开发依赖
        - less loader
        - less
    4. 清理项目
      - 清理 App.vue
        ```js
          <template>
            <div id="app">
              <router-view></router-view>
            </div>
          </template>

          <script>
          export default {
            name: 'app'
          }
          </script>

        ```
      - 清理 router/index.js
        ```js
          import Vue from 'vue'
          import VueRouter from 'vue-router'

          Vue.use(VueRouter)

          const routes = [
          ]

          const router = new VueRouter({
            routes
          })

          export default router

        ```
      - 删除 views目录
      - 删除 components/HelloWorld.vue
    
  - 登录页面
    - 全局样式
      1. src/asserts/css/global.css
        ```css
          html, body, #app {
            height: 100%;
            margin: 0;
            padding: 0;
          }
        ```
      2. main.js
        ```js
          import './asserts/css/global.css'
        ```
    - 新建Login.vue组件
    - 添加路由
    ```js
      import Login from './components/Login'

      const routes = [
        { path: '/login', componets: Login }
      ]
    ```