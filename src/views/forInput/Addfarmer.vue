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
          <b-form-input id="basicName" type="text" autocomplete="name" v-model="id"></b-form-input>
        </b-form-group>

        <b-form-group
          description="Полное имя фермера"
          label="ФИО"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name" v-model="name"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Номер телефона"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name" v-model="phone"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Почта"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name" v-model="email"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Адрес"
          label-for="basicName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="basicName" type="text" autocomplete="name" v-model="address"></b-form-input>
        </b-form-group>



        <div class="row">
          <div class="col-3">
            <p>Поселок</p>
          </div>
          <div class="col-9">
            <select class="w-100"  v-model="village">
              <option disabled value=""> Please select one</option>
              <option  v-for="vil in getVillages">{{vil.id}}
              </option>
            </select>
          </div>
        </div>

      </b-form>
      <div class="form-actions">
        <b-button type="submit" variant="primary" @click="createNew">Добавить фермера</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Addfarmer",
        data: () =>{
            return{
                id: "",
                name: "",
                phone: "",
                email: "",
                address: "",
                village: "",
                getVillages: "",
            }
        },
        created: function () {
            this.fetchData();
        },
        methods:{

            fetchData: function () {
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    axios({url: 'https://vaccinsystem.herokuapp.com/farmer/Village/', method: 'GET' })

                        .then(resp => {
                            console.log('getVillage',resp.data)
                            this.getVillages = resp.data.results
                            resolve(resp)

                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            createNew(){
                let id = this.id
                let name = this.name
                let phone = this.phone
                let email = this.email
                let address = this.address
                let village = this.village

                // console.log(ruraldistrict)

                // let username = this.login
                // let password = this.password
                this.$store.dispatch('createFarmer', { id, name, phone, email, address, village})
                    .then(() => {
                        this.$router.push('/farmer')

                        // this.$router.push('/village')
                    })
                    .catch(err => console.log(err))


                this.$router.push('/farmer')
                console.log("ARUUU",village)
                }
            }
    }
</script>

<style scoped>

</style>
