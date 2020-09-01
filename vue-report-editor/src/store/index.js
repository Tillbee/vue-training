import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import workers from './modules/workers'
import issues from './modules/issues'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    workers,
    issues
  }
})