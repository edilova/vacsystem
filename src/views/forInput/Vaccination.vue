<template>
    <div>
        <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
            <b-button block variant="primary" class="mb-2" to="/Addvaccination">Добавить вакцину</b-button>
        </b-col>
        <b-col lg="12">
            <div>
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
                </b-card>
            </div>
        </b-col>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Vaccination",
        data: () => {
            return {
                getMedicine: "",
            }
        },
        created: function () {
            this.fetchData();
        },
        methods: {
            fetchData: function () {
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    axios({url: 'http://185.22.65.39:7000/vaccination/Medicine/', method: 'GET' })

                        .then(resp => {
                            console.log('getMedicine',resp.data)
                            this.getMedicine = resp.data.results
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

</style>
