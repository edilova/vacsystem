<template>
    <div>
      <div class="row">
        <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
          <b-button v-on:click="pageAddW('add')"  block variant="primary" class="mb-2" >Добавить работника</b-button>
        </b-col>
        <b-col cols="2" sm="4" md="2" class="ml-1 mb-3 mb-xl-0 ">
          <b-button v-on:click="listOfWorkers('notadd')"  block variant="primary" class="mb-2" >Список  работников</b-button>
        </b-col>


      </div>


      <div  v-show="addWorkerPage == 'notadd'">
        <b-card>
          <!--{{getWorkers}}-->
          <table class="table">
            <thead>
            <tr>
              <th scope="col">ИИН</th>
              <th scope="col">ФИО</th>
              <th scope="col">Специальность</th>
              <th scope="col">Департамент</th>
              <th scope="col">С.О</th>
              <th scope="col">Тел.</th>
            </tr>
            </thead>
            <tbody v-for="emp in getWorkers">
            <tr>
              <th scope="row">{{emp.id}}</th>
              <td>{{emp.name}}</td>
              <td>{{emp.employeetype}}</td>
              <td>{{emp.department}}</td>
              <td>{{emp.ruraldistrict}}</td>
              <td>{{emp.phone}}</td>
            </tr>
            </tbody>
          </table>
        </b-card>
      </div>

      <div  v-show="addWorkerPage == 'add'">
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
                  <option disabled value="">Please select one</option>
                  <option v-for="spec in specialities">{{spec.id}}</option>
                </select>
              </div>

            </div>

            <div class="row">
              <div class="col-3">
                <p>Отдел</p>
              </div>

              <div class="col-9">
                <select class="w-100"  v-model="selectedDep">
                  <option disabled value="">Please select one</option>
                  <option  v-for="de in departments">{{de.id}}
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
                  <option disabled value="">Please select one</option>
                  <option  v-for="so in okrugs">{{so.id}}
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


      </div>


{{selectedDep}}
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
        name: "Workers",
      components: {cTable},
      data: () => {
        return {
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
          phone:""
        }
      },
        created: function () {
            this.fetchData();
        },
      methods:{

          fetchData: function () {
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: 'https://vaccinsystem.herokuapp.com/employee/Employee/', method: 'GET' })

                      .then(resp => {
                          console.log('getWorkers',resp.data)
                          this.getWorkers = resp.data.results
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
                  axios({url: 'https://vaccinsystem.herokuapp.com/employee/Employee/', method: 'GET' })

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
          this.addWorkerPage = $FullName
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');



                  //get Department
                  axios({url: 'https://vaccinsystem.herokuapp.com/employee/Department/', method: 'GET' })

                      .then(resp => {
                          console.log('DEPARTMENT',resp.data)
                          this.departments = resp.data.results
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })


                  //get Speciality
                  axios({url: 'https://vaccinsystem.herokuapp.com/employee/EmployeeType/', method: 'GET' })

                      .then(resp => {
                          console.log('SPECIALITY',resp.data)
                          this.specialities = resp.data.results
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

                  //get Sel'skii okrug
                  axios({url: 'https://vaccinsystem.herokuapp.com/farmer/RuralDistrict/', method: 'GET' })

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
                })
                .catch(err => console.log(err))
            console.log("in creat new fuction")

        }
      }
    }
</script>

<style scoped>
input{
  /*border-color: #e4ecf1;*/
  /*border-radius: 0.2rem;*/
  /*border-top-color: #dbe2e7;*/
  /*border-style: groove;*/
  /*height: 2.2rem;*/
}
</style>
