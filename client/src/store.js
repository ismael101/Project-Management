import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    strict:true,
    //plugins:[createPersistedState()],
    state:{
        token:null,
        username:'Ismael Mohamed',
        userMode:false,
        demoMode: false,
        personalProjects:[
            { id: 1, title: 'Design a new website', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id: 2, title: 'Code up the homepage', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id: 3, title: 'Design video thumbnails', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id: 4, title: 'Create a community forum', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          ],
        teamProjects:[
            { id: 1, title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id: 2, title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id: 3,title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { id: 4, title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          ],
        teamMembers:[
        {id: 1, name: 'The Net Ninja', role: 'Web Developer', avatar: '/avatar1.png'},
        {id: 2, name: 'Ryu', role:'Graphic Designer', avatar:'/avatar2.png'},
        {id: 3, name: 'Chun Li', role:'Web Developer', avatar: '/avatar3.png'},
        {id: 4, name: 'Gouken', role:'Social Media Maverick', avatar:'/avatar4.png'},
        {id: 5, name: 'Yoshi', role:'Sales Guru', avatar:'/avatar7.png'}
    ],

    },
    mutations:{
        setToken(state, token){
            state.token = token

        },
        setUser(state, username){
            state.user = username
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
        }
    },
    actions:{
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
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
        }

    }
    


})