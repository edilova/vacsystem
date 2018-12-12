<template>
    <div>Main Pagewevew
      <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
        <b-button v-on:click="created" block variant="primary" class="mb-2" >Добавить фермера</b-button>
      </b-col>
      <!--{{todos}}-->
      <!--{{todos.name}}-->

      <div v-for="todo in todos">
        <p>{{todo}}</p>
      </div>



      <div>

        <hr>
        <h2>Fetch Example</h2>
        <downloadexcel
          class = "btn"
          :data = "json_data"
          :fields = "json_fields"

          type    = "csv">
          Download Excel
        </downloadexcel>
      </div>
      <!--<ul v-if="todos && todos.length">-->
        <!--<li v-for="todo of todos">-->
          <!--<h2>{{todo.name}}</h2>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
</template>


<script>


  import downloadexcel from "vue-json-excel";
  import axios from 'axios';



    export default {
        name: "Main",
      components: {
        downloadexcel,
      },
      data: () => {
        return {
          todos: [],
          json_fields: {
            'Complete name': 'name',
            'Date': 'date',
            'ed': 'city',
            'saf': 'birthdate'
          },
          json_data: [
            {
              'name': 'Tony Peña',
              'city': 'New York',
              'country': 'United States',
              'birthdate': '1978-03-15',
              'phone': {
                'mobile': '1-541-754-3010',
                'landline': '(541) 754-3010'
              }
            },
            {
              'name': 'Thessaloniki',
              'city': 'Athens',
              'country': 'Greece',
              'birthdate': '1987-11-23',
              'phone': {
                'mobile': '+1 855 275 5071',
                'landline': '(2741) 2621-244'
              }
            }
          ],
          json_meta: [
            [
              {
                'key': 'charset',
                'value': 'utf-8'
              }
            ]
          ],
        }
      },
      methods:{
        // async fetchData(){
        //   const response = await axios.get('https://holidayapi.com/v1/holidays?key=a4b2083b-1577-4acd-9408-6e529996b129&country=US&year=2017&month=09');
        //   console.log(response);
        //   return response.data.holidays;
        // },
        created() {
          console.log("CREATED CLICKED")
          this.$http.get('https://vaccinsystem.herokuapp.com/employee/Department/').then(function (data) {
            this.todos = data.body
            console.log(data)
          })
          // axios.get('https://vaccinsystem.herokuapp.com/vaccination/Disease/',{
            // headers: {
            //   "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU0NDUyNTM3NSwianRpIjoiZTYzMDU1NjA1OTBiNDcwZGJhOTgyMzE4MjkwNmM4Y2UiLCJ1c2VyX2lkIjoxfQ.bKKcgeb907surGnP8BpZ6DPxQlvMJLZneZ-XztTQ6T0",
            //   "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTQ0NDM5Mjc1LCJqdGkiOiJhNTM5YjliZjA1ZWQ0Y2Q4ODU2YTE3ODQ2NzBjZTg5OSIsInVzZXJfaWQiOjF9.gpiEroljGTodTa_bp3W_EQUQM7DE6u_ZW6yKpr0Yduk"
            // }
          // })
          //   .then(response => {
          //     this.todos = response.data.results
          //     console.log(response.data)
          //   })
          //   .catch(error => {
          //     console.log(error);
          //   })
        },
      }
    }


</script>

<style scoped>

</style>
