<template>
  <div  class="animated fadeIn">
    <b-card>
      <b-table  hover :items="items"></b-table>
    </b-card>
  </div>
</template>

<script>
  const items = [
    { name: 'ГУ Отдел сельского хозяйства и ветеринарии Коксускского района', address:'ул.Ленина 61,21' },
    { name: 'ГУ Отдел сельского хозяйства и ветеринарии Аксуского района', address:'М. Горького 40' },
    { name: 'ГУ Отдел сельского хозяйства и ветеринарии Карасайского района', address:'пр.Аль-Фараби 66' },
    { name: 'ГУ Отдел сельского хозяйства и ветеринарии Балхашского района', address:'Абылхайыр хана 40' },
    { name: 'ГУ Отдел сельского хозяйства и ветеринарии Илийского района', address:'ул.Абая 125' },
    { name: 'ГУ Отдел сельского хозяйства и ветеринарии Талгарского района', address:'ул.Айтеке би 77' },



  ]
    export default {
      name: "AddressesMIO",
      data () {
        return {
          items: items
        }
      }
    }
</script>

<style scoped>

</style>
