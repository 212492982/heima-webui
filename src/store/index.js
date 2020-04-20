import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: [
      { path: '/home', title: '首页', icon: 'el-icon-s-home' },
      {
        title: '权限管理',
        path: '/right',
        icon: 'el-icon-s-check',
        children: [
          { title: '用户管理', path: '/user/list', bone: 'Table', scope: 'user', icon: 'el-icon-s-custom' }
        ]
      }
    ]
  },
  mutations: {
    SET_MENU_LIST: (state, menuList) => {
      state.menuList = menuList
    }
  },
  actions: {
    updateMenuList ({ commit }, menuList) {
      commit('SET_MENU_LIST', menuList)
    }
  },
  modules: {
  }
})
