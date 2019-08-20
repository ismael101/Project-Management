<template>
<nav>

    <v-app-bar flat app >
    <v-app-bar-nav-icon @click='drawer = !drawer' v-if='$store.state.userMode || $store.state.demoMode'></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Project Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey" v-on:click='signout' v-if='$store.state.userMode || $store.state.demoMode'>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
     <v-navigation-drawer width=300 app v-model="drawer" class="cyan" v-if='$store.state.userMode || $store.state.demoMode'>
       <v-container>
          <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="200">
            <img class="text-lg-center" :src="this.$store.state.userimage">
          </v-avatar>
        </v-flex>
        <v-flex class='mt-2'>
           <p class="white--text subheading mt-5">{{this.$store.state.user}}</p>
        </v-flex>
        <v-flex class="mt-4 mb-6">
        </v-flex>
      </v-layout>
       <v-list
        dense
        nav
      >
        <v-list-item 
          v-for="item in items"
          :key="item.title"
          link
          router :to='item.route'
          class='white--text'
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
         </v-container>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            drawer:true,
            dialog:false,
            items:[
                {
                    icon:'dashboard',
                    title:'Team Projects',
                    route:'/dashboard'
                },
                {
                    icon:'folder',
                    title:'Personal Projects',
                    route:'/personal'
                },
                {
                    icon:'person',
                    title:'Team',
                    route:'/team'
                }
            ],
          teamlead:this.$store.state.user,
          avatar: this.$store.state.userimage
        }
    },
    methods:{
      signout(){
        this.$router.push({name:'login'})
      }
    }

}
</script>

<style>

</style>
