<template>
    <div>
        <b-card>
            <b-form>
                <b-form-group
                        description="id животного"
                        label="id животного"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-input id="basicName" type="text" autocomplete="name" v-model="id"></b-form-input>
                </b-form-group>

                <div class="row">
                    <div class="col-3">
                        <p>Пол животного</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100"  v-model="selectedGender">
                            <option disabled value="">Выберите пол животного</option>
                            <option v-for="plac in getGender" v-bind:value="plac.id">{{plac.name}}</option>
                        </select>
                    </div>
                </div>

                <b-form-group
                        description="Возраст животного"
                        label="Возраст животного"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-input id="basicName" type="text" autocomplete="name" v-model="age"></b-form-input>
                </b-form-group>


                <div class="row">
                    <div class="col-3">
                        <p>Вид животного</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100" v-model="selectedSuit" >
                            <option disabled value="">Выберите масть животного</option>
                            <option v-for="suit in getSuit" v-bind:value="suit.id">{{suit.name}}</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <p>Владелец</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100" v-model="selectedFarmer" >
                            <option disabled value="">Выберите владельца</option>
                            <option v-for="far in getFarmer" v-bind:value="far.id">{{far.name}}</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <p>Место рождения</p>
                    </div>
                    <div class="col-9">
                        <select class="w-100" v-model="selectedPlace" >
                            <option disabled value="">Выберите место рождения</option>
                            <option v-for="plac in getPlace" v-bind:value="plac.id">{{plac.name}}</option>
                        </select>
                    </div>
                </div>



                <b-form-group
                        description="Номер телефона Работника"
                        label="Номер телефона"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
                </b-form-group>


            </b-form>
            <div class="form-actions">
                <b-button v-on:click="createNew" type="submit" variant="primary">Добавить животное</b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: "Addlivestock",
        data: () => {
            return {
                id: "",
                age: "",
                selectedSuit: "",
                name: "",
                getSuit: "",
                getGender: "",
                getPlace: "",
                getFarmer: "",
                ruraldistrict: "",
                selectedPlace: "",
                selectedFarmer: "",
                selectedGender: "",

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
                    axios({url: 'https://vaccinsystem.herokuapp.com/livestock/Suit/', method: 'GET' })

                        .then(resp => {
                            console.log('GET SUIT',resp.data)
                            this.getSuit = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                    //get Farmer
                    axios({url: 'https://vaccinsystem.herokuapp.com/farmer/Farmer/', method: 'GET' })

                        .then(resp => {
                            console.log('GET FARMER',resp.data)
                            this.getFarmer = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })



                    //get Place of birth
                    axios({url: 'https://vaccinsystem.herokuapp.com/farmer/Village/', method: 'GET' })

                        .then(resp => {
                            console.log('GET PLACE',resp.data)
                            this.getPlace = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                    //get Gender
                    axios({url: 'https://vaccinsystem.herokuapp.com/livestock/Sex/', method: 'GET' })

                        .then(resp => {
                            console.log('GENDER',resp.data)
                            this.getGender = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            createNew(){
                let id = this.id
                let sex = this.selectedGender
                let age = this.age
                let typeoflivestock = this.selectedSuit
                let farmer = this.selectedFarmer
                let placeofbirth = this.selectedPlace

                // let id = "232333"
                // let sex = "1"
                // let age = "2"
                // let typeoflivestock = "2"
                // let farmer = "4542"
                // let placeofbirth = "3"

                console.log(placeofbirth)
                this.$store.dispatch('createVLivestock', { id, sex, age, typeoflivestock, farmer, placeofbirth})
                    .then(() => {
                        console.log("ADD LIVESTOCK")
                    })
                    .catch(err => console.log(err))

                this.$router.push('/livestock')

                axios({url: 'https://vaccinsystem.herokuapp.com/livestock/LiveStock/', method: 'GET' })

                    .then(resp => {
                        console.log('getLivestock',resp.data)
                        this.getLivestock = resp.data.results
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
