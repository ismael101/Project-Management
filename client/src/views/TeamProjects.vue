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

      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <template v-slot:activator='{on}'>
          <v-btn small text color="grey" v-on='on' @click="sortBy('title')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator='{on}'>
          <v-btn small text color="grey" v-on='on' @click="sortBy('person')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">By Person</span>
          </v-btn>
          </template>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat v-for="project in this.$store.state.teamProjects" :key="project.id">
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
            <div class="text-center">{{ project.due }}</div>
          </v-flex>
          <v-flex xs4 sm3 md2>
            <div class="center">
              <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
          <v-flex xs4 sm3 md2>
            <v-btn-toggle class='mt-2 text-center'>
              <EditTeamProject v-bind:id="project.id"></EditTeamProject>
              <v-icon @click='deleteProject'>delete</v-icon>
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
    sortBy(prop) {
      this.$store.state.teamProjects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
    deleteProject(){

    },
    fetchProjects(){
      if(this.$store.state.userMode){
        this.$
      }
    }
  },
  mounted(){
    
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