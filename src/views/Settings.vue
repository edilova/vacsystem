<template>
  <div class="animated fadeIn">
    <b-col cols="12" md="12">
          <b-card no-body class="">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn class="accordion-btn" block href="#" v-b-toggle.accordion1 variant="info">Сменить пароль</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  <small>*Пароль должен состоять только из латинских букв и цифр и не может быть короче 8 символов. Регистр букв имеет значение</small>
                  <br><small>*Пожалуйста, используйте сложный пароль</small>
                </p>

                <b-form-group
                  label="Текущий пароль"
                  label-for="basicPassword"
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-input id="basicPassword" type="password" placeholder="Введите пароль" autocomplete="current-password"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Новый пароль"
                  label-for="basicPassword"
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-input id="basicPassword" type="password" placeholder="Введите пароль" autocomplete="current-password"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Подтвердить новый пароль"
                  label-for="basicPassword"
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-input id="basicPassword" type="password" placeholder="Введите пароль" autocomplete="current-password"></b-form-input>
                </b-form-group>

                <div class="form-actions">
                  <b-button type="submit" variant="primary">Сохранить</b-button>
                </div>
              </b-card-body>
            </b-collapse>

          </b-card>
          <b-card no-body class="">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn class="accordion-btn" block href="#" v-b-toggle.accordion2 variant="info">Добавить почту</b-btn>
            </b-card-header>
            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  <small>*Пожалуйста, введите свой электронный адрес для сохранения в системе</small>
                </p>
                <b-form-group
                  description=""
                  label="Электронный адрес"
                  label-for="basicPassword"
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-input id="basicPassword" type="password" placeholder="Введите электронный адрес" autocomplete="current-password"></b-form-input>
                </b-form-group>
                <div class="form-actions">
                  <b-button type="submit" variant="primary">Сохранить</b-button>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
    </b-col>
  </div>
</template>


<script>
    export default {
        name: "Settings"
    }
</script>

<style scoped>
.accordion-btn{
  background-color: transparent;
  border: 0;
}
.card-text{
  font-size: 1.2rem;
  color: #73818f;
}
.card{
  margin-bottom: 0.4rem;
}
</style>
