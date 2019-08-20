<template>
    <div class='teams'>
      <v-layout row-wrap justify-space-between>
        <v-flex xs12 sm6 md6 lg6>
    <h1 class="subheading grey--text my-10" >Team Members</h1>
      </v-flex>
      </v-layout>
        <v-divider></v-divider>
        <v-container class='teamcontent my-5' fluid>
        <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="person in this.$store.state.teamMembers.filter(people => {return people._id !== this.$store.state.userid})" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4 text-center">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.profilepic">
              </v-avatar>
            </v-responsive>
            <v-card-text class='text-center'>
              <div class="subheading">{{ person.username }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class='justify-center'>
                <v-icon small left>email</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>
