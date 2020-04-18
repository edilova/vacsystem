<template>
    <div>
        <b-card>
            <b-form>
                <b-form-group
                        label="id вакцины"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-input id="basicName" type="text" autocomplete="name" v-model="id"></b-form-input>
                </b-form-group>

                <b-form-group
                        label="Название вакцины"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-input id="basicName" type="text" autocomplete="name" v-model="name"></b-form-input>
                </b-form-group>

                <div class="row">
                    <div class="col-3">
                        <p>Объем</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100" v-model="volume" >
                            <option disabled value="">Выберите объем</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <p>Доза</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100" v-model="selectedDose" >
                            <option disabled value="">Выберите дозу</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <p>Болезни</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100" v-model="selectedDisease" >
                            <option disabled value="">Выберите болезнь</option>
                            <option v-for="plac in getDisease" v-bind:value="plac.id">{{plac.name}}</option>
                        </select>
                    </div>
                </div>


                <div class="row">
                    <div class="col-3">
                        <p>Вид животного</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100" v-model="selectedSuit" >
                            <option disabled value="">Выберите вид животного</option>
                            <option v-for="suit in getSuit" v-bind:value="suit.id">{{suit.name}}</option>
                        </select>
                    </div>
                </div>


                <b-form-group
                        label="Описание вакцины"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-input id="basicName" type="text" autocomplete="name" v-model="description"></b-form-input>
                </b-form-group>


            </b-form>
            <div class="form-actions">
                <b-button v-on:click="createNew" type="submit" variant="primary">Добавить вакцину</b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: "Addvaccination",
        data: () => {
            return {
                id: "",
                name: "",
                volume: "",
                description: "",
                getSuit: "",
                getGender: "",
                getDisease: "",
                selectedSuit: "",
                selectedDose: "",
                selectedDisease: "",

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

                    //get Suit
                    axios({url: 'https://vetprof.herokuapp.com/livestock/Suit/', method: 'GET' })

                        .then(resp => {
                            console.log('GET SUIT',resp.data)
                            this.getSuit = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                    //get Farmer
                    axios({url: 'https://vetprof.herokuapp.com/vaccination/Disease/', method: 'GET' })

                        .then(resp => {
                            console.log('GET DISEAES',resp.data)
                            this.getDisease = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            createNew(){
                let id = this.id
                let name = this.name
                let volume = this.volume
                let dose = "1"
                let disease = this.selectedDisease
                let modeofapplication = "1"
                let typesoflivestock = this.selectedSuit
                let description = this.description
                //
                // let id = "1212"
                // let name = "qerty"
                // let dose = "1"
                // let disease = [1, 1]
                // let modeofapplication = "1"
                // let typesoflivestock = "1"
                // let description = "hello hello"

                console.log(description)
                this.$store.dispatch('createVaccination', { id, name,volume, dose, disease, modeofapplication, typesoflivestock,description})
                    .then(() => {
                        console.log("ADD LIVESTOCK")
                    })
                    .catch(err => console.log(err))

                this.$router.push('/vaccination')

                axios({url: 'https://vetprof.herokuapp.com/vaccination/Medicine/', method: 'GET' })

                    .then(resp => {
                        console.log('getMedicine',resp.data)
                        this.getMedicine = resp.data.results
                        resolve(resp)


                    })
                    .catch(err => {console.log(err)
                    })

            }
        }
    }
</script>

<style scoped>

</style>
