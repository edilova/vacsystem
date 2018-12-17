<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Авторизация</h1>
                  <p class="text-muted">Введите свои логин и пароль</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input v-model="login" type="text" class="form-control" placeholder="Логин" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input v-model="password" type="password" class="form-control" placeholder="Пароль" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" @click="setLogin" class="px-4">Войти</b-button>
                    </b-col>
                    <!--<b-col cols="6" class="text-right">-->
                      <!--<b-button variant="link" class="px-0">Forgot password?</b-button>-->
                    <!--</b-col>-->


                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <!--<b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">-->
              <!--<b-card-body class="text-center">-->
                <!--<div>-->
                  <!--<h2>Sign up</h2>-->
                  <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
                  <!--<b-button variant="primary" class="active mt-3">Register Now!</b-button>-->
                <!--</div>-->
              <!--</b-card-body>-->
            <!--</b-card>-->
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

export default {
    name: 'Login',
    data(){
        return{
            login: '',
            username:'',
            password: '',
            token: '',
        }
    },
    methods:{
        setLogin(){
            let username = this.login
            let password = this.password
            this.$store.dispatch('login', { username, password })
                .then(() => this.$router.push('/main'))
                .catch(err => console.log(err))


            // $.ajax({
            //     url: "https://vaccinsystem.herokuapp.com/api-token-auth/ ",
            //     type: "POST",
            //     data: {
            //         username: this.login,
            //         password: this.password
            //         // username: "admin",
            //         // password: "admin123"
            //     },
            //     success:(responce) => {
            //         // console.log("SUCCESS OR NOT",responce)
            //         this.token = responce.token
            //         console.log("TOKEN ",this.token)
            //         sessionStorage.setItem("Auth_token session", responce.token)
            //         // localStorage.setItem("Auth token local", responce.access)
            //         console.log("AUTH TOKEN", responce.token)
            //         this.$router.push({ name: 'Главная', query: { redirect: '/main' } });
            //
            //
            //         if (sessionStorage.getItem('Auth_token session') != null){
            //             this.$emit('loggedIn')
            //             if(this.$route.params.nextUrl != null){
            //                 this.$router.push(this.$route.params.nextUrl)
            //             }
            //             else {
            //
            //
            //                 this.$router.push('main')
            //                 // if(is_admin== 1){
            //                 //     this.$router.push('admin')
            //                 // }
            //                 // else {
            //                 //     this.$router.push('dashboard')
            //                 // }
            //             }
            //         }
            //     },
            //     error: (responce) => {
            //         if(responce.status === 400){
            //             alert("Логин или пароль не верен")
            //         }
            //         console.log("ERROR", responseText)
            //     }
            // })
        }
    }
}
</script>
