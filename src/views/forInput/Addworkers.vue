<template>
    <div>
      <b-card>
        <b-form>
          <b-form-group
            description="ИИН Работника"
            label="ИИН Работника"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>

          <b-form-group
            description="пароль"
            label="Пароль"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>

          <b-form-group
            description="Полное имя Работника"
            label="ФИО"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>


          <b-form-group
            label="Специальность"
            label-for="basicSelect"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="basicSelect"
                           :plain="true"
                           :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                           value="Please select">
            </b-form-select>
          </b-form-group>

          <div class="row">
            <div class="col-3">
              <p>otdel</p>
            </div>

            <div class="col-9">
              <select class="w-100" v-model="selected" >
                <option disabled value="">Please select one</option>
                <option  v-for="todo in todos.results">{{todo.name}}</option>
              </select>
            </div>

          </div>



          <b-form-group
            description="Номер телефона Работника"
            label="Номер телефона"
            label-for="basicName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>


        </b-form>
        <div class="form-actions">
          <b-button v-on:click="created" type="submit" variant="primary">Добавить работника</b-button>
        </div>
      </b-card>
      {{todos}}
      ARu
      {{todosname}}
      <div v-for="todo in todos.results">
        <p>{{todo.name}}</p>
      </div>

      <!--<select v-model="selected" >-->
        <!--<option disabled value="">Please select one</option>-->
        <!--<option  v-for="todo in todos.results">{{todo.name}}</option>-->
      <!--</select>-->
      <!--<span>Selected: {{ selected }}</span>-->
      <!--<div>Main Pagewevew-->
        <!--<b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">-->
          <!--<b-button v-on:click="created" block variant="primary" class="mb-2" >Добавить фермера</b-button>-->
        <!--</b-col>-->
        <!--{{todos}}-->
        <!--{{todos.name}}-->

        <!--<ul v-if="todos && todos.length">-->
          <!--<li v-for="todo of todos">-->
            <!--<h2>{{todo.name}}</h2>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
</template>

<script>
  import axios from 'axios';

    export default {
      name: "Addworkers",
      data: () => {
        return {
          todos: "",
          // todos.name:
          todosname:"",
          options:['a','a'],
          selected: ""
        }
      },
      methods:{
        created() {
          console.log("CREATED CLICKED")
          this.$http.get('https://vetprof.herokuapp.com/employee/Department/').then(function (data) {
            this.todos = data.body
            console.log(data)
          })
          // axios.get('http://185.22.65.39:7000/vaccination/Disease/',{
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

  select{
    border-color: lightgrey;
    background-color: #fff;
  }
</style>
