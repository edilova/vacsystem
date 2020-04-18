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
            <b-form-input v-model="IIN" id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>



          <b-form-group
                  description="пароль"
                  label="Пароль"
                  label-for="basicName"
                  :label-cols="3"
                  :horizontal="true">
            <b-form-input v-model="passw" id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>

          <b-form-group
                  description="Полное имя Работника"
                  label="ФИО"
                  label-for="basicName"
                  :label-cols="3"
                  :horizontal="true">
            <b-form-input v-model="fio" id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>


          <div class="row">
            <div class="col-3">
              <p>Специальность</p>
            </div>

            <div class="col-9">
              <select class="w-100" v-model="selectedSpec" >
                <option disabled value="">Выберите специальность</option>
                <option v-for="spec in specialities" v-bind:value="spec.id">{{spec.name}}</option>
              </select>
            </div>

          </div>

          <div class="row">
            <div class="col-3">
              <p>Отдел</p>
            </div>

            <div class="col-9">
              <select class="w-100"  v-model="selectedDep">
                <option disabled value="">Выберите отдел</option>
                <option  v-for="de in departments" v-bind:value="de.id">{{de.name}}
                </option>

              </select>
            </div>

          </div>

          <div class="row">
            <div class="col-3">
              <p>Сельский округ</p>
            </div>

            <div class="col-9">
              <select class="w-100"  v-model="selectedSO">
                <option disabled value="">Выберите сельский округ</option>
                <option  v-for="so in okrugs" v-bind:value="so.id">{{so.name}}
                </option>
              </select>
            </div>

          </div>



          <b-form-group
                  description="Номер телефона Работника"
                  label="Номер телефона"
                  label-for="basicName"
                  :label-cols="3"
                  :horizontal="true">
            <b-form-input  v-model="phone"  id="basicName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>


        </b-form>
        <div class="form-actions">
          <b-button v-on:click="createNew()" type="submit" variant="primary">Добавить работника</b-button>
        </div>
      </b-card>
<!--      {{todos}}-->
<!--      ARu-->
<!--      {{todosname}}-->
<!--      <div v-for="todo in todos.results">-->
<!--        <p>{{todo.name}}</p>-->
<!--      </div>-->

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
    import { shuffleArray } from '@/shared/utils'
    import cTable from './Table.vue'
    import axios from 'axios'

    const someData = () => shuffleArray([
        {ИИН: 12345678, ФИО: 'Edilova Aruzhan' , специальность: 'spec', отдел: 'depart', номер: '+7 707 123 34 45'},
    ])

    export default {
      name: "Addworkers",
      data: () => {
        return {
            selected: "",
            items: someData,
            itemsArray: someData(),
            message: "",
            todos: "",
            departments:"",
            specialities:"",
            okrugs: "",
            getWorkers:"",
            listOfEmp: "",
            // todos.name:
            todosname:"",
            options:['a','a'],
            selectedSpec: "",
            selectedDep: "",
            selectedSO: "",
            linkPrev:"",
            linkNext:"",
            fields: [
                {key: 'ИИН', label: 'User', sortable: true},
                {key: 'ФИО'},
                {key: 'специальность'},
                {key: 'отдел', sortable: true},
                {key: 'номер'},
            ],
            addWorkerPage: 'notadd',
            IIN: "",
            passw: "",
            fio: "",
            spec:"",
            otdel:"",
            phone:"",
            currentPage: 1,
            perPage: 10,
            totalRows: 0
        }
      },
        created: function () {
            this.fetchData();
            this.pageAddW();
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
          getBadge (status) {
              return status === 'Active' ? 'success'
                  : status === 'Inactive' ? 'secondary'
                      : status === 'Pending' ? 'warning'
                          : status === 'Banned' ? 'danger' : 'primary'
          },
          getRowCount (items) {
              return items.length
          },
          userLink (id) {
              return `users/${id.toString()}`
          },
          rowClicked (item) {
              const userLink = this.userLink(item.id)
              this.$router.push({path: userLink})
          },

          pagebtnPrevious(){
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: this.linkPrev, method: 'GET' })

                      .then(resp => {
                          console.log('getWorkers2',resp.data)
                          this.getWorkers = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          // this.getFarmerLength = resp.data.count % 100
                          console.log('LENGTHHHHH', resp.data.count)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
          pagebtnNext(){
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: this.linkNext, method: 'GET' })

                      .then(resp => {
                          console.log('getWorkers3',resp.data)
                          this.getWorkers = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          // this.getFarmerLength = resp.data.count % 100
                          console.log('LENGTHHHHH', resp.data.count)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
          fetchData: function () {
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: 'https://vetprof.herokuapp.com/employee/Employee/', method: 'GET' })

                      .then(resp => {
                          console.log('getWorkers',resp.data)
                          this.getWorkers = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          resolve(resp)
                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
          listOfWorkers($FullName){

              this.addWorkerPage = $FullName
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: 'https://vetprof.herokuapp.com/employee/Employee/', method: 'GET' })

                      .then(resp => {
                          console.log('getWorkers',resp.data)
                          this.getWorkers = resp.data.results
                          resolve(resp)
                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
          pageAddW($FullName) {
              this.$router.push('/mainInput/addworkers')
              this.addWorkerPage = $FullName
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');



                  //get Department
                  axios({url: 'https://vetprof.herokuapp.com/employee/Department/', method: 'GET' })

                      .then(resp => {
                          console.log('DEPARTMENT',resp.data)
                          this.departments = resp.data.results
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })


                  //get Speciality
                  axios({url: 'https://vetprof.herokuapp.com/employee/EmployeeType/', method: 'GET' })

                      .then(resp => {
                          console.log('SPECIALITY',resp.data)
                          this.specialities = resp.data.results
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

                  //get Sel'skii okrug
                  axios({url: 'https://vetprof.herokuapp.com/farmer/RuralDistrict/', method: 'GET' })

                      .then(resp => {
                          console.log('OKRUG',resp.data)
                          this.okrugs = resp.data.results
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })
              })

          },

          createNew(){
              let id = this.IIN
              let employeeskey = this.passw
              let name = this.fio
              let employeetype = this.selectedSpec
              let department = this.selectedDep
              let ruraldistrict = this.selectedSO
              let phone = this.phone

              console.log(ruraldistrict)
              this.$store.dispatch('createWorker', { id, employeeskey,name,employeetype,department,ruraldistrict ,phone})
                  .then(() => {
                      console.log("TIUTUTU")
                      this.$router.push('/mainInput/workers')
                  })
                  .catch(err => console.log(err))
              console.log("in creat new fuction")

              this.$router.push('/mainInput/workers')
          },
      }
    }
</script>

<style scoped>
  .card {
    border: none;
  }

  select{
    border-color: lightgrey;
    background-color: #fff;
  }
</style>
