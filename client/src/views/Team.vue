<template>
    <div class='teams'>
        <h1 class='subheading grey--text my-10'>Team Members</h1>
        <v-divider></v-divider>
        <v-container class='teamcontent my-5'>
            <v-layout row wrap>
                 <v-flex xs12 sm6 md4 lg3 v-for='person in team' :key="person.name" justify-center align-center>
                     <v-card flat class='text-xs-center'>
                             <v-avatar class='ms-10' size="150">
                             <v-img  :src='person.avatar'></v-img>
                             </v-avatar>
                        <v-card-text>
                            <div class="subheading">{{person.name}}</div>
                            <div class='grey--text'>{{person.role}}</div>
                        </v-card-text>
                        <v-card-actions >
                            <v-btn text color="cyan"><v-icon>email</v-icon></v-btn>
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
.teamcontent{
    margin-left: 7%
}
</style>
