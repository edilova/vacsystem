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
          <b-form-input id="basicName" type="text" autocomplete="name" v-model="name"></b-form-input>
        </b-form-group>




        <div class="row">
          <div class="col-3">
            <p>Сельский Округ</p>
          </div>
          <div class="col-9">
            <select class="w-100"  v-model="selectedSO">
              <option disabled value="">Выберите сельский округ</option>
              <option  v-for="so in getSO" v-bind:value="so.id">{{so.name}}
              </option>
            </select>
          </div>
        </div>


      </b-form>
      <div class="form-actions">
        <b-button type="submit" variant="primary" @click="createNew">Добавить поселок</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
    import axios from 'axios'



    export default {
        name: "Addvillage",
        data: () => {
            return {
                selectedSO: "",
                name: "",
                getSO: "",
                ruraldistrict: "",
            }
        },
        created: function () {
            this.fetchData();
        },
        methods:{
            fetchData: function () {
                return new Promise((resolve, reject) => {
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    axios({url: 'https://vetprof.herokuapp.com/farmer/RuralDistrict/', method: 'GET' })

                        .then(resp => {
                            console.log('getWorkers',resp.data)
                            this.getSO = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            createNew(){
                let name = this.name
                let ruraldistrict = this.selectedSO

                console.log(ruraldistrict)
                this.$store.dispatch('createVillage', { name, ruraldistrict})
                    .then(() => {
                        this.$router.push('/village')
                    })
                    .catch(err => console.log(err))

                console.log("in creat new village fuction")

            }
        }
    }
</script>

<style scoped>

</style>
