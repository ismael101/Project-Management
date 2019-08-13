<template>
<v-layout justify-center>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="green lighten-3" outlined v-on="on">Create Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Add A New Project</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field placeholder="Title" outlined>

            </v-text-field>
            <v-textarea placeholder="Content" outlined>

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
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="form.due"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.due"
          type="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(form.due)">OK</v-btn>
        </v-date-picker>
      </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
                        <v-btn class='mx-3' outlined color='cyan'>Submit</v-btn>
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
      form:{
         title:'',
        content:'',
        due:null,
      },
      dialog:false,
      menu:false
    }
  },
  methods:{
    submit(){
      this.dialog = false
      console.log(this.form)
    },
    close(){
      this.dialog = false
      this.form.title = '',
      this.form.content = '',
      this.form.due = null
    }
  }
}
</script>