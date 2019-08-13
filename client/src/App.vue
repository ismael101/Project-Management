<template>
  <v-app class="application">
    <Navbar />
    <v-content class="mx-5 mb-5" justify-center>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>