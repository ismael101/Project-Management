<template>
    <div class='login'>
        <v-container>
            <v-layout column align-center >
                <v-flex class='mx-12'>
                    <h1 class='subheading grey--text my-10 align-center'>Login</h1>
                    <v-card width="500" flat>
                    <v-form>
                        <v-text-field v-model='form.username' required outlined label='Username'></v-text-field>
                        <v-text-field v-model='form.password' required outlined label='Password'></v-text-field>
                        <v-layout row wrap>
                            <v-btn-toggle rounded>
                        <v-btn outlined color='cyan' @click='submit'>Login</v-btn> <v-btn text disabled>OR</v-btn> <v-btn outlined color='cyan' @click='view'>View</v-btn>
                            </v-btn-toggle>
                        </v-layout>
                    </v-form>
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
            form:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        submit(){
            console.log(this.form)
        },
        view(){
            
        }
    }
}
</script>

<style>
.login{
    margin-top:7%
}

</style>
