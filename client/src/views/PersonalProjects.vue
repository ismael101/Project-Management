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
        <v-expansion-panel v-for='project in this.$store.state.personalProjects' :key='project.id'>
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-title>{{project.due}}</v-card-title>
              <v-card-text>{{project.content}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    
  </div>
</template>

<script>
import AddPersonalProject from '../components/AddPersonalProject'

export default {
  components:{
    AddPersonalProject
  },
  data() {
    return {
    }
  },
}
</script>