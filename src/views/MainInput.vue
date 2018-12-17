<template>
    <div>
      <b-card>
        <b-button size="lg" variant="outline-primary" to="/workers"   block>Работники</b-button>
        <b-button size="lg" variant="outline-primary" to="/village"  block>Поселок</b-button>
        <b-button size="lg" variant="outline-primary" to="/farmer"  block>Фермеры</b-button>
        <b-button size="lg" variant="outline-primary" to="/livestock"  block>Животные</b-button>
        <b-button size="lg" variant="outline-primary" to="/vaccination"  block>Вакцина</b-button>
        <!--<b-button size="lg" variant="outline-primary" to="/bloodtest"  block>Тесты крови</b-button>-->
      </b-card>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Main",
        components: {
        },
        data: () => {
            return {
                todos: [],
                departments: ""
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
                    axios({url: 'https://vaccinsystem.herokuapp.com/employee/Department/', method: 'GET' })

                        .then(resp => {
                            console.log('DEPARTMENT',resp.data)
                            this.departments = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            // async fetchData(){
            //   const response = await axios.get('https://holidayapi.com/v1/holidays?key=a4b2083b-1577-4acd-9408-6e529996b129&country=US&year=2017&month=09');
            //   console.log(response);
            //   return response.data.holidays;
            // },
            created() {

                this.$store.dispatch('main')
                    .then(() => {
                        this.todos = data.body
                        console.log("DATA",data)
                    })
                    .catch(err => console.log(err))
            },
        }
    }

    // console.log("OKOKOKOKOKOKOKOKO")
    // console.log('promise example ');
    // const token = sessionStorage.getItem('token');
    // axios.defaults.headers.common['Authorization'] = "Token " + token
    // console.log(axios.defaults.headers, 'headers in get');
    //
    // //get Department
    // axios({url: 'https://vaccinsystem.herokuapp.com/employee/Department/', method: 'GET' })
    //
    //     .then(resp => {
    //         console.log('DEPARTMENT',resp.data)
    //         this.departments = resp.data.results
    //         resolve(resp)
    //
    //
    //     })
    //     .catch(err => {console.log(err)
    //     })

</script>

<style scoped>



</style>
