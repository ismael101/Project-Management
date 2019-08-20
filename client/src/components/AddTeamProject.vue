<template>
  <div class='AddProject'>
    <template>
       <div class='text-center'>
       <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
       </div>
  <v-layout justify-center>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="green lighten-3" outlined v-on="on">Create Team Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Add A New Project</v-card-title>
        <v-card-text>
          <v-form lazy-validation ref='form'>
            <v-text-field placeholder="Title" outlined required :counter='6' v-model='form.title' :rules='form.titleRules'>

            </v-text-field>
            <v-text-field placeholder="Person" outlined required v-model='form.person' :rules='form.personRules'>

            </v-text-field>
            <v-select placeholder="Status" outlined :items='items' v-model='form.status' :rules='form.statusRules'>

            </v-select>
            <v-textarea placeholder="Content" outlined required v-model="form.content" :rules='form.contentRules' :counter='10'>

            </v-textarea>
            <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="form.due"
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
        required
        :rules = form.dueRules
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="form.due"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
            required
            :rules = form.dueRules
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.due"
          type="date"
          no-title
          scrollable
          required
          :rules = form.dueRules
        >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(form.due)">OK</v-btn>
        </v-date-picker>
      </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div class='mx-3'>
                <v-btn outlined color='cyan' @click='submit'>Submit</v-btn><v-btn outlined color='red' @click='close'>Close</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      text: 'Team Project Added',
      form:{
        title:'',
        titleRules:[
          (v) => !!v || 'Title is Required',
          (v) => v.length >= 6 || 'Title must be at least 7 Characters Long'
        ],
        person:'',
        personRules:[
          (v) => !!v || 'Person is Required',
        ],
        due:null,
        dueRules:[
         (v) => !!v || 'Due Date is Required', 
        ],
        status:'',
        statusRules:[
          (v) => !!v || 'Status is Required',
        ],
        content:'',
        contentRules:[
          (v) => !!v || 'Content is Required',
          (v) => v.length <= 10 || 'Content must be at least 10 Characters Long'
        ]
       
      },
      dialog:false,
      menu:false,
      items:['ongoing','complete','overdue']
    }
  },
  methods:{
    submit(){
      this.$teams.createProject({id: this.$store.state.teamid, token: this.$store.state.token}, this.form)
                .then(result => {
                  console.log(result)
                  this.$teams.getAllProjects({teamid: this.$store.state.teamid, token: this.$store.state.token})
                            .then(projects => {
                              this.$store.dispatch('setTeamProjects', projects)
                              this.snackbar = true
                            })
                  this.dialog = false
                })
                .catch(err => {
                  console.log(err)
                })
      
    },
    close(){
      this.form.title = '',
      this.form.content = '',
      this.form.status=''
      this.form.due = null
      this.dialog = false 
    }
  }
}
</script>