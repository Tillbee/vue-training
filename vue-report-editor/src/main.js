import Vue from 'vue'
import store from './store'
import App from './components/App.vue'
import './style.scss'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
