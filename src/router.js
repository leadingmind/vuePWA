import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home.vue'
import SingleSeries from './components/SingleSeries.vue'
import SingleSeason from './components/SingleSeason.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/series/:id', name: 'SingleSeries', component: SingleSeries, props: true},
    {path: '/season/:id', name: 'SingleSeason', component: SingleSeason, props: true}
  ]
})
