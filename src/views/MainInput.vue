<template>
    <div>
      <b-card>
        <b-button size="lg" variant="outline-primary" to="/workers"  block>Работники</b-button>
        <b-button size="lg" variant="outline-primary" to="/village"  block>Поселок</b-button>
        <b-button size="lg" variant="outline-primary" to="/farmer"  block>Фермеры</b-button>
        <b-button size="lg" variant="outline-primary" to="/livestock"  block>Животные</b-button>
        <b-button size="lg" variant="outline-primary" to="/vaccination"  block>Вакцинаций</b-button>
        <b-button size="lg" variant="outline-primary" to="/bloodtest"  block>Тесты крови</b-button>
      </b-card>
    </div>
</template>

<script>
    export default {
        name: "MainInput"
    }
</script>

<style scoped>

</style>
