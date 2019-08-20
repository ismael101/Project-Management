<template>
  <div class="projects">
    <v-layout row wrap justify-space-between>
      <v-flex xs12 sm6 md6 lg6>
    <h1 class="subheading grey--text my-10" >Personal Projects</h1>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6>
    <AddPersonalProject class='my-12 justify-end'></AddPersonalProject>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for='project in this.$store.state.personalProjects' :key='project._id'>
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-title>{{project.due.substring(0,10)}}</v-card-title>
              <v-card-text>{{project.content}}<p></p><v-chip small outlined color='cyan' :class="`${project.status}`">{{ project.status }}</v-chip></v-card-text>
              <v-card-actions><EditPersonalProject v-bind:id='project._id'></EditPersonalProject> <v-icon v-on:click='deleteProject(project._id)'>delete</v-icon></v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    
  </div>
</template>

<script>
import AddPersonalProject from '../components/AddPersonalProject'
import EditPersonalProject from '../components/EditPersonalProject'

export default {
  components:{
    AddPersonalProject,
    EditPersonalProject
  },
  data() {
    return {
    }
  },
  methods:{
    deleteProject(projectid){
      const answer = window.confirm('Are You Sure You Want To Delete This Project?')
      if(answer){
        this.$personal.deleteProject({id: projectid, token: this.$store.state.token})
                    .then(res => {
                      console.log(res)
                      this.$personal.getAllProjects({userid: this.$store.state.userid, token: this.$store.state.token})
                                   .then(projects => {
                                    this.$store.dispatch('setPersonalProjects', projects)
                                  })
                                  .catch(err => {
                                      console.log(err)
                                  })
                    })
                    .catch(err => {
                      console.log(err)
                    })
      }
    }
  }
}
</script>