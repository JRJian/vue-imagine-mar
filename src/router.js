import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component:Home }
]

export default new VueRouter({
    // mode: 'history',
    mode: 'hash',
    routes
})