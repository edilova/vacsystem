<template>
  <div>
    <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
      <b-button block variant="primary" class="mb-2" to="/addfarmer">Добавить фермера</b-button>
    </b-col>
    <b-col lg="12">
      <div>
        <b-card>
          <!--{{getWorkers}}-->
          <table class="table">
            <thead>
            <tr>
              <th scope="col">ИИН</th>
              <th scope="col">Имя</th>
              <th scope="col">тел.</th>
              <th scope="col">email</th>
              <th scope="col">адрес</th>
              <th scope="col">поселок</th>
            </tr>
            </thead>
            <tbody v-for="far in getFarmer">
            <tr>
              <td>{{far.id}}</td>
              <td>{{far.name}}</td>
              <td>{{far.phone}}</td>
              <td>{{far.email}}</td>
              <td>{{far.address}}</td>
              <td>{{far.village}}</td>
            </tr>
            </tbody>
          </table>
          <nav>
            <div class="pagination d-flex flex-row justify-content-between w-100">
              <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                <b-button block variant="primary" class="mb-2" @click="pagebtnPrevious">Пред</b-button>
              </b-col>
              <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                <b-button block variant="primary" class="mb-2" @click="pagebtnNext">След</b-button>
              </b-col>
            </div>
          </nav>
        </b-card>
      </div>
    </b-col>
  </div>
</template>


<script>
  import { shuffleArray } from '@/shared/utils'
  import cTable from './Table.vue'
  import axios from 'axios';
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

  Vue.use(Vuetify)

  const someData = () => shuffleArray([
    {ИИН: 12345678, ФИО: 'Edilova Aruzhan' , специальность: 'spec', отдел: 'depart', номер: '+7 707 123 34 45'},
  ])
    export default {
        name: "Farmer",
      components: {cTable},
      data: () => {
        return {
          items: someData,
          itemsArray: someData(),
          getFarmer:"",
          getFarmerLength:"",
          pageid: "1",
          linkPrev:"",
          linkNext:"",
          fields: [
            {key: 'ИИН', label: 'User', sortable: true},
            {key: 'ФИО'},
            {key: 'специальность'},
            {key: 'отдел', sortable: true},
            {key: 'номер'},
          ],
          todos: [],
            currentPage: 1,
            perPage: 10,
            totalRows: 0
        }
      },
        created: function () {
            this.fetchData();
        },
      methods: {
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
                          console.log('getFarmer',resp.data)
                          this.getFarmer = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          this.getFarmerLength = resp.data.count % 100
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
                          console.log('getFarmer',resp.data)
                          this.getFarmer = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          this.getFarmerLength = resp.data.count % 100
                          console.log('LENGTHHHHH', resp.data.count)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
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






          fetchData: function () {
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: 'http://185.22.65.39:7000/farmer/Farmer/?count', method: 'GET' })

                      .then(resp => {
                          console.log('getFarmer',resp.data)
                          this.getFarmer = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          this.getFarmerLength = resp.data.count % 100
                          console.log('LENGTHHHHH', resp.data.count)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
      }
    }
</script>

<style scoped>

</style>
