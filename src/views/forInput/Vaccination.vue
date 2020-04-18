<template>
    <div>
        <b-col cols="3" sm="4" md="3" class="mb-3 mb-xl-0 ">
            <b-button block variant="primary" class="mb-2" to="/Addvaccination">Добавить вакцину</b-button>
        </b-col>
<!--        <b-col lg="12">-->
<!--            <div>-->
                <b-card>
                    <!--{{getWorkers}}-->
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Доза</th>
                            <th scope="col">Вид скота</th>
                            <th scope="col">Описание</th>

                        </tr>
                        </thead>
                        <tbody v-for="med in getMedicine">
                        <tr>
                            <td>{{med.id}}</td>
                            <td>{{med.name}}</td>
                            <td>{{med.dose}}</td>
                            <td>{{med.typesoflivestock}}</td>
                            <td>{{med.description}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="pagination d-flex flex-row justify-content-between w-100">
                        <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                            <b-button block variant="primary" class="mb-2" @click="pagebtnPrevious">Пред</b-button>
                        </b-col>
                        <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                            <b-button block variant="primary" class="mb-2" @click="pagebtnNext">След</b-button>
                        </b-col>
                    </div>
                </b-card>
<!--            </div>-->
<!--        </b-col>-->
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Vaccination",
        data: () => {
            return {
                getMedicine: "",
                linkPrev:"",
                linkNext:"",
            }
        },
        created: function () {
            this.fetchData();
        },
        methods: {
            pagebtnPrevious(){
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    axios({url: this.linkPrev, method: 'GET' })

                        .then(resp => {
                            console.log('getMedicine',resp.data)
                            this.getMedicine = resp.data.results
                            this.linkPrev = resp.data.links.previous
                            this.linkNext = resp.data.links.next
                            // this.getFarmerLength = resp.data.count % 100
                            console.log('LENGTHHHHH', resp.data.count)
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            pagebtnNext(){
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    axios({url: this.linkNext, method: 'GET' })

                        .then(resp => {
                            console.log('getMedicine',resp.data)
                            this.getMedicine = resp.data.results
                            this.linkPrev = resp.data.links.previous
                            this.linkNext = resp.data.links.next
                            // this.getFarmerLength = resp.data.count % 100
                            console.log('LENGTHHHHH', resp.data.count)
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            fetchData: function () {
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    axios({url: 'https://vetprof.herokuapp.com/vaccination/Medicine/', method: 'GET' })

                        .then(resp => {
                            console.log('getMedicine',resp.data)
                            this.getMedicine = resp.data.results
                            this.linkPrev = resp.data.links.previous
                            this.linkNext = resp.data.links.next
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
        }
    }
</script>

<style scoped>
    .card {
        border: none;
    }
    .card-body {
        padding-top: 0;
    }
    .table thead th, tbody td {
        border-bottom: none;
    }
</style>
