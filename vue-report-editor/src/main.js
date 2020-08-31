import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import workers from './database/workers.json';
import './style.scss'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    workers,
    selectedWorker : null
  },
  mutations: {
    setWorker(state, worker) {
      state.selectedWorker = worker
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
