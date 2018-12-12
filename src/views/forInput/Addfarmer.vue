<template>
  <div>
    <b-card>
      <b-form>
        <b-form-group
          description="ИИН фермера"
          label="ИИН фермера"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
        </b-form-group>

        <b-form-group
          description="Полное имя фермера"
          label="ФИО"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Номер телефона"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Почта"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Адрес"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
        </b-form-group>


        <b-form-group
          label="Поселок"
          label-for="basicSelect"
          :label-cols="3"
          :horizontal="true">
          <b-form-select id="basicSelect"
                         :plain="true"
                         :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                         value="Please select">
          </b-form-select>
        </b-form-group>

      </b-form>
      <div class="form-actions">
        <b-button type="submit" variant="primary">Добавить фермера</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
    export default {
        name: "Addfarmer"
    }
</script>

<style scoped>

</style>
