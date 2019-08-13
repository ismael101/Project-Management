<template>
  <div class='AddProject'>
    <template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ on }">
        <v-icon v-on='on'>edit</v-icon>
      </template>
      <v-card>
        <v-card-title class="headline">Edit Team Project</v-card-title>
        <v-card-text>
          <v-form lazy-validation ref='form'>
            <v-text-field placeholder="Title" outlined required v-model='form.title' :rules='form.titleRules'>

            </v-text-field>
            <v-text-field placeholder="Person" outlined required v-model='form.person' :rules='form.personRules'>

            </v-text-field>
            <v-select placeholder="Status" outlined :items='items' v-model='form.status' :rules='form.statusRules'>

            </v-select>
            <v-textarea placeholder="Content" outlined required v-model="form.content" :rules='form.contentRules'>

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
  props:{
    id:Number, 
  },
  data() {
    return {
      form:{
        title:'',
        titleRules:[
          (v) => !!v || 'Title is Required',
          (v) => v.length <= 7 || 'Title must be at least 7 Characters Long'
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
      let projects = this.$store.state.teamProjects.filter(project => {
        return project.id != this.id
      })

      let newprojects = [...projects,this.form]
      this.$store.dispatch('setTeamProjects', newprojects)
      this.dialog = false
      
    },
    close(){
      this.dialog = false 
    },
    projects(){
        let project = this.$store.state.teamProjects.filter(project => {
            return project.id == this.id
        })
        console.log(this.$store.state.teamProjects.indexOf(project.id))
        this.form.title = project[0].title
        this.form.person = project[0].person
        this.form.due = project[0].due
        this.form.status = project[0].status
        this.form.content = project[0].content


    }
  },
  mounted(){
      this.projects()
  }
}
</script>