<template>
    <div class='login'>
        <v-container>
            <v-layout column align-center >
                <v-flex class='mx-12'>
                    <v-alert v-if='error' type="error">Authentication Error</v-alert>
                    <h1 class='subheading grey--text my-10 align-center'>Login</h1>
                    <v-card width="500" flat>
                    <v-form>
                        <v-text-field v-model='form.username' required outlined label='Username'></v-text-field>
                        <v-text-field v-model='form.password' required outlined label='Password'></v-text-field>
                        <v-layout row wrap>
                            <v-btn-toggle rounded>
                        <v-btn outlined color='cyan' @click='submit'>Login</v-btn> <v-btn text disabled>OR</v-btn> <v-btn outlined color='cyan' @click='demo'>Demo</v-btn>
                            </v-btn-toggle>
                        </v-layout>
                    </v-form>
                    </v-card>
                     
                </v-flex>
            </v-layout>
        </v-container>
        <div>
            <v-progress-circular
            class='loader'
            v-if='this.loading'
            :size="70"
            :width="7"
            color="purple"
            indeterminate
            ></v-progress-circular>
        </div>
    </div>
</template>

<script>
import jsonwebtoken from 'jsonwebtoken'
import { constants } from 'crypto';

export default {
    data(){
        return{
            error:false,
            loading:false,
            form:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        submit(){
            this.$users.login(this.form)
            .then(res => {
                this.error = false
                this.loading = true
                this.$store.dispatch('setToken',res.token)
                let userinfo = jsonwebtoken.decode(res.token)
                console.log(userinfo)
                this.$store.dispatch('setUser', userinfo.username)
                this.$store.dispatch('setUserId', userinfo.id)
                this.$store.dispatch('setTeamId', userinfo.teamid)
                console.log(this.$store.state)
                this.$users.getTeam({teamid:this.$store.state.teamid, token: this.$store.state.token})
                            .then(team => {
                                    this.$store.dispatch('setTeamMembers', team)
                                    console.log(this.$store.state.teamMembers)
                            })
                            .catch(err => {
                                    console.log(err)
                            })
                /*
                this.$teams.getAllProjects({teamid: this.$store.state.teamid, token: this.$store.state.token})
                            .then(projects => {
                                this.$store.dispatch('setTeamProjects', projects)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                this.$personal.getAllProjects({userid: this.$store.state.userid, token: this.$store.state.token})
                              .then(projects => {
                                  this.$store.dispatch('setPersonalProjects', projects)
                                  console.log('got projects: ', projects)
                              })
                              .catch(err => {
                                  console.log(err)
                              })
                this.loading = false
                */
                this.$store.dispatch('setUserMode', true)
                this.$router.push({name:'dashboard'})
                

            })
            .catch(err => {
                console.log(err)
                this.error=true
            })
        },
        demo(){
            this.$store.dispatch('setDemoMode', true)
            this.$router.push({name:'dashboard'})
        }
    }
}
</script>

<style>
.login{
    margin-top:7%
}
.loader{
    margin-top: 50%;
    margin-left: 50%;
}

</style>
