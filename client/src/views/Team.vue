<template>
    <div class='teams'>
        <h1 class='subheading grey--text my-10'>Team Members</h1>
        <v-divider></v-divider>
        <v-container class='teamcontent my-5' fluid>
        <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4 text-center">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text class='text-center'>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class='justify-center'>
              <v-btn text color="grey">
                <v-icon small left>email</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            team: this.$store.state.teamMembers
    }
}
}
</script>

<style>
</style>
