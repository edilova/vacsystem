<template>
    <div>
      <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
        <b-button block variant="primary" class="mb-2" to="/addvillage">Добавить поселок</b-button>
      </b-col>
      <b-col lg="12">
        <c-table :table-data="items" :fields="fields"></c-table>
      </b-col>
    </div>
</template>

<script>
  import { shuffleArray } from '@/shared/utils'
  import cTable from './Table.vue'
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
          fields: [
            {key: 'поселок', label: 'User', sortable: true}
          ],
        }
      }
    }
</script>


<style scoped>

</style>
