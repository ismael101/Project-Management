<template>
  <div class="dashboard">
    <v-layout row wrap justify-space-between>
      <v-flex xs12 sm6 md6 lg6>
    <h1 class="subheading grey--text my-10" >Team Projects</h1>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 class="text-right">
    <AddTeamProject class='my-12'></AddTeamProject>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
     <v-container class="my-5">
      <v-card flat v-for="project in this.$store.state.teamProjects" :key="project._id" class='project'>
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md4>
            <div class="caption grey--text text-center">Project title</div>
            <div class="text-center">{{ project.title }}</div>
          </v-flex>
          <v-flex xs12 sm3 md2>
            <div class="caption grey--text text-center">Person</div>
            <div class="text-center">{{ project.person }}</div>
          </v-flex>
          <v-flex xs4 sm3 md2>
            <div class="caption grey--text text-center">Due by</div>
            <div class="text-center">{{ project.due.substring(0,10) }}</div>
          </v-flex>
          <v-flex xs4 sm3 md2>
            <div class="center">
              <v-chip small outlined  color='cyan' :class="`${project.status}`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
          <v-flex xs4 sm3 md2>
            <v-btn-toggle class='mt-2 text-center'>
              <EditTeamProject v-bind:id="project._id"></EditTeamProject>
              <v-icon @click='deleteProject(project._id)'>delete</v-icon>
            </v-btn-toggle>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
   
  </div>
</template>

<script>
import AddTeamProject from '../components/AddTeamProject'
import EditTeamProject  from '../components/EditTeamProject'

export default {
  components:{
    AddTeamProject,
    EditTeamProject
  },
  data() {
    return {
    }
  },
  methods: {
    deleteProject(projectid){
      const answer = window.confirm('Are You Sure You Want To Delete This Project?')
      if(answer){
        this.$teams.deleteProject({id: projectid, token: this.$store.state.token})
                    .then(res => {
                      console.log(res)
                      this.$teams.getAllProjects({teamid: this.$store.state.teamid, token: this.$store.state.token})
                                   .then(projects => {
                                    this.$store.dispatch('setTeamProjects', projects)
                                  })
                                  .catch(err => {
                                      console.log(err)
                                  })
                    })
                    .catch(err => {
                      console.log(err)
                    })
      }
    },
    }
  
}
</script>

<style>
.project.complete{
  border-left: 4px solid lightgreen;
  border-right: 4px solid lightgreen
}
.project.ongoing{
  border-left: 4px solid orange;
  border-right: 4px solid orange
}
.project.overdue{
  border-left: 4px solid lightcoral;
  border-right: 4px solid lightcoral
}
.dashboard-content{
  margin-left: 7%
}

</style>