<template>
  <div>
    <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
      <b-button block variant="primary" class="mb-2" to="/addfarmer">Добавить фермера</b-button>
      <b-button v-on:click="created" block variant="primary" class="mb-2" >Доб</b-button>

    </b-col>
    {{todos}}
    <b-col lg="12">
      <c-table :table-data="items" :fields="fields"></c-table>
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
      methods: {
        created() {
          axios.get('https://vaccinsystem.herokuapp.com/farmer/Farmer/', {
            // headers: {
            //   'Authorization': 'Accept'
            // }
          })
            .then(response => {
              this.todos = response.data.results
              console.log(response.data)
            })
            .catch(error => {
              console.log(error);
            })
        }
      }
    }
</script>

<style scoped>

</style>
