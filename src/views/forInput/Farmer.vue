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
        </b-card>
      </div>
    </b-col>
  </div>
</template>

<script>
  import { shuffleArray } from '@/shared/utils'
  import cTable from './Table.vue'
  import axios from 'axios';

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
          fields: [
            {key: 'ИИН', label: 'User', sortable: true},
            {key: 'ФИО'},
            {key: 'специальность'},
            {key: 'отдел', sortable: true},
            {key: 'номер'},
          ],
          todos: []
        }
      },
        created: function () {
            this.fetchData();
        },
      methods: {
          fetchData: function () {
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: 'https://vaccinsystem.herokuapp.com/farmer/Farmer/', method: 'GET' })

                      .then(resp => {
                          console.log('getFarmer',resp.data)
                          this.getFarmer = resp.data.results
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
