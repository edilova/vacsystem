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
    { Департамент: 'ГУ Отдел сельского хозяйства и ветеринарии Коксускского района', адрес:'ул.Ленина 61,21' },
    { Департамент: 'ГУ Отдел сельского хозяйства и ветеринарии Аксуского района', адрес:'М. Горького 40' },
    { Департамент: 'ГУ Отдел сельского хозяйства и ветеринарии Карасайского района', адрес:'пр.Аль-Фараби 66' },
    { Департамент: 'ГУ Отдел сельского хозяйства и ветеринарии Балхашского района', адрес:'Абылхайыр хана 40' },
    { Департамент: 'ГУ Отдел сельского хозяйства и ветеринарии Илийского района', адрес:'ул.Абая 125' },
    { Департамент: 'ГУ Отдел сельского хозяйства и ветеринарии Талгарского района', адрес:'ул.Айтеке би 77' },



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
    background-color: #2D9CDB;
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
