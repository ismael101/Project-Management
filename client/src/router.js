import Vue from 'vue'
import Router from 'vue-router'
import TeamProjects from './views/TeamProjects'
import PersonalProjects from './views/PersonalProjects'
import Team from './views/Team'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'login',
      component:Login,
    },
    {
      path: '/teamprojects',
      name: 'dashboard',
      component: TeamProjects
    },
    {
      path: '/personalprojects',
      name: 'projects',
      component:PersonalProjects
    },
    {
      path:'/team',
      name:'team',
      component:Team
    },

  ]
})
