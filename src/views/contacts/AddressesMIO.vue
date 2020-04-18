<template>
  <div  class="animated fadeIn">
    <div class="background-block"></div>
    <div class="main-input-top w-100 d-flex justify-content-between">
      <h3 class="mb-3">Контакты</h3>
    </div>
    <b-card class="main-content mx-5">
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

<style scoped lang="scss">
  .background-block {
    width: 100vw;
    height: 30rem;
    background-color: #1982C4;
    position: absolute;
    z-index: -10;
  }
  .main-content {
    top: 3rem;
    height: 35rem;
  }
  .main-input-top {
    padding-top: 3rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    h3 {
      color: #ffffff;
    }
  }
</style>
