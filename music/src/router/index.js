import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '../components/shouye';
import Detail from '../components/detail';
import Rank from '../components/rank';
import Radio from '../components/radio';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: Shouye,
      children:[{
        path:'/rank',
        name:'rank',
        component:Rank
      },{
        path:'/radio',
        name:'radio',
        component:Radio
      }]
    },{
      path:'/detail',
      name:'detail',
      component:Detail
    }
  ]
})
