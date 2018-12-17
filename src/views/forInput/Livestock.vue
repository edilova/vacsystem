<template>
    <div>
        <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
            <b-button block variant="primary" class="mb-2" to="/addlivestock">Добавить животное</b-button>
        </b-col>
        <b-col lg="12">
            <div>
                <b-card>
                    <!--{{getWorkers}}-->
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Возраст</th>
                            <th scope="col">Владелец</th>
                            <th scope="col">Место рождения</th>
                            <th scope="col">Пол</th>
                            <th scope="col">Вид</th>
                        </tr>
                        </thead>
                        <tbody v-for="lv in getLivestock">
                        <tr>
                            <td>{{lv.id}}</td>
                            <td>{{lv.age}}</td>
                            <td>{{lv.farmer}}</td>
                            <td>{{lv.placeofbirth}}</td>
                            <td>{{lv.sex}}</td>
                            <td>{{lv.typeoflivestock}}</td>
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
        name: "Livestock",
        data: () => {
            return {
                getLivestock: "",
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

                    axios({url: 'https://vaccinsystem.herokuapp.com/livestock/LiveStock/', method: 'GET' })

                        .then(resp => {
                            console.log('getLivestock',resp.data)
                            this.getLivestock = resp.data.results
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
