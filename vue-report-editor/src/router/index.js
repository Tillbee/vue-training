import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Selection from '@/pages/Selection'
import Transition from '@/pages/Transition'
import Form from '@/pages/Form'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)

const routes = [
    {
        path: '/selection',
        name: 'selection',
        alias: '/',
        component: Selection
    },{
        path: '/transition',
        name: 'transition',
        component: Transition,
        beforeEnter(to, from, next){
            let isSelected = store.state.workers.selected;
            if(isSelected){
                next()
            }else{
                next('/selection')
            }
        }
    },{
        path: '/form',
        name: 'form',
        component: Form,
        beforeEnter(to, from, next){
            let isSelected = store.state.workers.selected;
            if(isSelected){
                next()
            }else{
                next('/selection')
            }
        }
    },
    {
        path: '/404',
        name: 'notFound',
        alias: '*',
        component: NotFound
    }
  ]

export default new VueRouter({
    routes
})