<template>
  <div>
    <b-card>
      <b-form>
        <b-form-group
          description="Название поселка"
          label="Название поселка"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
        </b-form-group>



        <b-form-group
          label="Сельский округ"
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
        <b-button type="submit" variant="primary">Добавить работника</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
    export default {
        name: "Addvillage"
    }
</script>

<style scoped>

</style>
