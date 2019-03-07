<template>
    <div>
      <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
        <b-button block variant="primary" class="mb-2" to="/addvillage">Добавить поселок</b-button>
      </b-col>
      <b-col lg="12">
          <div>
              <b-card>
                  <!--{{getWorkers}}-->
                  <table class="table">
                      <thead>
                      <tr>
                          <th scope="col">Имя</th>
                          <th scope="col">Сельский Округ</th>
                      </tr>
                      </thead>
                      <tbody v-for="vil in getVillages">
                      <tr>
                          <td>{{vil.name}}</td>
                          <td>{{vil.ruraldistrict}}</td>
                      </tr>
                      </tbody>
                  </table>

                  <div class="pagination d-flex flex-row justify-content-between w-100">
                      <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                          <b-button block variant="primary" class="mb-2" @click="pagebtnPrevious">Пред</b-button>
                      </b-col>
                      <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                          <b-button block variant="primary" class="mb-2" @click="pagebtnNext">След</b-button>
                      </b-col>
                  </div>
              </b-card>
          </div>
      </b-col>
    </div>
</template>

<script>
  import { shuffleArray } from '@/shared/utils'
  import cTable from './Table.vue'
  import axios from 'axios'


  const someData = () => shuffleArray([
    {поселок: 'Zhans'},
  ])
    export default {
        name: "Village",
      components: {cTable},
      data: () => {
        return {
          items: someData,
          itemsArray: someData(),
          getVillages: "",
          linkPrev:"",
          linkNext:"",
          fields: [
            {key: 'поселок', label: 'User', sortable: true}
          ],
        }
      },
        created: function () {
            this.fetchData();
        },
        methods:{
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
                            console.log('getVillages',resp.data)
                            this.getVillages = resp.data.results
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
                            console.log('getVillages',resp.data)
                            this.getVillages = resp.data.results
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
                    axios({url: 'http://185.22.65.39:7000/farmer/Village/', method: 'GET' })

                        .then(resp => {
                            console.log('getVillage',resp.data)
                            this.getVillages = resp.data.results
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
            },
            // example (){
            //     return new Promise((resolve, reject) => {
            //         // commit('auth_request')
            //         console.log('promise example ');
            //         const token = sessionStorage.getItem('token');
            //
            //         axios.defaults.headers.common['Authorization'] = "Token " + token
            //         // axios.defaults.headers.common['Content-Type'] = "application/json"
            //         // axios.defaults.headers.common['Accept'] = "application/json"
            //
            //         console.log(axios.defaults.headers, 'headers in get');
            //
            //         axios({url: 'http://185.22.65.39:7000/employee/Department/', method: 'GET' })
            //
            //             .then(resp => {
            //                 console.log('DEPATRMENT',resp.data)
            //                 this.departments = resp.data.results
            //                 resolve(resp)
            //
            //
            //             })
            //             .catch(err => {console.log(err)
            //             })
            //     })
            // },
            pageAddW($FullName) {
                this.addWorkerPage = $FullName
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');



                    //get Department
                    axios({url: 'http://185.22.65.39:7000/employee/Department/', method: 'GET' })

                        .then(resp => {
                            console.log('DEPARTMENT',resp.data)
                            this.departments = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })


                    //get Speciality
                    axios({url: 'http://185.22.65.39:7000/employee/EmployeeType/', method: 'GET' })

                        .then(resp => {
                            console.log('SPECIALITY',resp.data)
                            this.specialities = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                    //get Sel'skii okrug
                    axios({url: 'http://185.22.65.39:7000/employee/EmployeeType/', method: 'GET' })

                        .then(resp => {
                            console.log('OKRUG',resp.data)
                            this.specialities = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })


                    //
                    // axios({url: 'http://185.22.65.39:7000/employee/Department/', method: 'GET' })
                    //
                    //     .then(resp => {
                    //         console.log('EXAMPLE',resp.data)
                    //         this.departments = resp.data.results
                    //         resolve(resp)
                    //
                    //
                    //     })
                    //     .catch(err => {console.log(err)
                    //     })
                })




                // console.log("CREATED CLICKED")
                // this.$http.get('http://185.22.65.39:7000/employee/Department/').then(function (data) {
                //   this.todos = data.body
                //   console.log("QWERTYUIOP{",data)
                // })
                // this.$http.get('http://185.22.65.39:7000/employee/EmployeeType/').then(function (data) {
                //   this.specialities = data.body
                //   console.log("SPECIALITY",data)
                // })
                //
                // this.$http.get('http://185.22.65.39:7000/employee/Employee/').then(function (data) {
                //   this.listOfEmp = data.body
                //   console.log("listOfEmp",data)
                // })

            },


            // listOfWorkers($FullName){
            //     this.addWorkerPage = $FullName
            //
            //     const token = sessionStorage.getItem('token');
            //
            //     axios.defaults.headers.common['Authorization'] = "Token " + token
            //     console.log(axios.defaults.headers, 'headers in get');
            //
            //     axios({url: 'http://185.22.65.39:7000/employee/Employee/', method: 'GET' })
            //
            //         .then(resp => {
            //             console.log('OKRUG',resp.data)
            //             this.getWorkers = resp.data.results
            //             resolve(resp)
            //
            //
            //         })
            //         .catch(err => {console.log(err)
            //         })
            // },



            createNew(){
                let id = this.IIN
                let employeeskey = this.passw
                let name = this.fio
                let employeetype = this.selectedSpec
                let department = this.selectedDep
                let ruraldistrict = '1'
                let phone = this.phone


                // let id = "23456789"
                // let employeeskey = "wejnvcknewkv1213"
                // let name = "test kudr"
                // let employeetype = '1'
                // let department = '1'
                // let ruraldistrict = '1'
                // let phone = "45980889"

                console.log(ruraldistrict)

                // let username = this.login
                // let password = this.password
                this.$store.dispatch('createWorker', { id, employeeskey,name,employeetype,department,ruraldistrict ,phone})
                    .then(() => {
                        console.log("TIUTUTU")
                    })
                    .catch(err => console.log(err))






                console.log("in creat new fuction")
                const newWorker = {
                    // IIN: this.IIN,
                    // passw: this.passw,
                    // fio: this.fio,
                    // spec: this.spec,
                    // otdel: this.otdel,
                    // phone: this.phone

                    // id: "'7",
                    // employeeskey: "13",
                    // name: "E A",
                    // employeetype: "1",
                    // department: "2",
                    // phone: "1234567"
                }



                // this.$http.post('http://185.22.65.39:7000/employee/Employee/',{
                //   id: this.IIN,
                //   employeeskey: this.passw,
                //   name: this.fio,
                //   employeetype: this.selectedSpec,
                //   department: this.selectedDep,
                //   phone: this.phone
                // }).then(function (data) {
                //   this.todos = data.body
                //   console.log("POST{",data)
                // })
            }
        }
    }
</script>


<style scoped>

</style>
