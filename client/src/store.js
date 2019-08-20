import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    strict:true,
    plugins:[createPersistedState()],
    state:{
        token:null,
        user:null,
        userid:null,
        teamid:null,
        userimage:null,
        userMode:false,
        demoMode: false,
        personalProjects:[],
        teamProjects:[],
        teamMembers:[]
    },
    mutations:{
        setToken(state, token){
            state.token = token

        },
        setUser(state, user){
            state.user = user
        },
        setUserId(state, id){
            state.userid = id
        },
        setTeamId(state, id){
            state.teamid = id
        },
        setPersonalProjects(state, personalProjects){
            state.personalProjects = personalProjects

        },
        setTeamProjects(state, teamProjects){
            state.teamProjects = teamProjects
        },
        setTeamMembers(state, teamMembers){
            state.teamMembers =  teamMembers
        },
        setUserMode(state, mode){
            state.userMode = mode
        },
        setDemoMode(state, mode){
            state.demoMode = mode
        },
        setImage(state, image){
            state.userimage = image
        }
    },
    actions:{
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        },
        setUserId({commit}, id){
            commit('setUserId',id)
        },
        setTeamId({commit}, id){
            commit('setTeamId', id)
        },
        setPersonalProjects({commit}, personalProjects){
            commit('setPersonalProjects', personalProjects)
        },
        setTeamProjects({commit}, teamProjects){
            commit('setTeamProjects', teamProjects)
        },
        setTeamMembers({commit}, teamMembers){
            commit('setTeamMembers', teamMembers)
        },
        setUserMode({commit}, mode){
            commit('setUserMode', mode)
        },
        setDemoMode({commit}, mode){
            commit('setDemoMode', mode)
        },
        setImage({commit}, image){
            commit('setImage', image)
        }

    }
    


})