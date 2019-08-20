import Vue from 'vue'
import Router from 'vue-router'
import TeamProjects from './views/TeamProjects'
import PersonalProjects from './views/PersonalProjects'
import Team from './views/Team'
import NotFound from './views/NotFound'
import Login from './views/Login'
import store from './store';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'login',
      component:Login,
      beforeEnter: (to,from,next) => {
        if(from.name === 'dashboard' || from.name ==='team' || from.name === 'personal'){
          const answer = window.confirm('Are You Sure You Want To Sign Out?')
          if(answer){
            store.dispatch('setToken', null)
            store.dispatch('setUserMode', false)
            store.dispatch('setDemoMode',false)
            next()
          }else{
            next(false)
          }

        }else{
          next()
        }
        if(store.state.userMode === true || store.state.demoMode === true){
          next({name:'dashboard'})
        }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: TeamProjects,
      beforeEnter: (to,from,next) => {
        if(store.state.userMode === false && store.state.demoMode === false){
          next({name:'login'})
        }
        else{
          next()
        }
      }
      
    },
    {
      path: '/personal',
      name: 'personal',
      component:PersonalProjects,
      beforeEnter: (to,from,next) => {
        if(store.state.userMode == false && store.state.demoMode == false){
          next({name:'login'})
        }
        else{
          next()
        }
      }
    },
    {
      path:'/team',
      name:'team',
      component:Team,
      beforeEnter: (to,from,next) => {
        if(store.state.userMode == false && store.state.demoMode == false){
          next({name:'login'})
        }
        else{
          next()
        }
      }
    },
    {
      path:'*',
      name:'notfound',
      component:NotFound,
      
    }

  ]
})
