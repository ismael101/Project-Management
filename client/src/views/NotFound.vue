<template>
  <v-container>
      <v-layout column align-center justify-center>
          <v-flex>
              <div class='error-message'>
              <h1 class='display-4'>404</h1>
              <h3 class="display-2 mt-10">Page Not Found</h3>
              <v-btn outlined color='cyan' v-on:click='login' class='mt-12'>Login</v-btn>
              </div>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    name:'NotFound',
    methods:{
        login(){
            this.$router.push({name:'login'})
        }
    }
}
</script>

<style>
.error-message{
    margin-top: 50%;
}

</style>