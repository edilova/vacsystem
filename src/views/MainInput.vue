<template>
    <div>
      <div class="background-block"></div>
      <div class="main-input-top w-100 d-flex justify-content-between">
        <h3>Детальная информация</h3>
<!--        <button class="add-button" v-if="whichRoute === 'workers'">Добавить работника</button>-->
<!--        <button class="add-button" v-if="whichRoute === 'village'">Добавить поселок</button>-->
<!--        <button class="add-button" v-if="whichRoute === 'farmer'">Добавить фермера</button>-->
<!--        <button class="add-button" v-if="whichRoute === 'livestock'">Добавить животное</button>-->
<!--        <button class="add-button" v-if="whichRoute === 'vaccination'">Добавить вакцинацию</button>-->
      </div>
      <b-card class="main-content mx-5">
        <div class="d-flex">
          <div class="content-left">
            <div class="left-side-button" :class="{ active: whichRoute === 'workers' }" size="lg" variant="outline-primary" @click="openList('workers')" to="/workers"   block>
              <h3>Работники</h3>
              <p>Узнать информацию о работниках</p>
            </div>
            <div class="left-side-button" :class="{ active: whichRoute === 'village' }" size="lg" variant="outline-primary" @click="openList('village')" to="/village"  block>
              <h3>Поселок</h3>
              <p>Узнать информацию о поселке</p></div>
            <div class="left-side-button" :class="{ active: whichRoute === 'farmer' }" size="lg" variant="outline-primary" @click="openList('farmer')" to="/farmer"  block>
              <h3>Фермеры</h3>
              <p>Узнать информацию о фермерах</p></div>
            <div class="left-side-button" :class="{ active: whichRoute === 'livestock' }" size="lg" variant="outline-primary" @click="openList('livestock')" to="/livestock"  block>
              <h3>Животные</h3>
              <p>Узнать информацию о животных</p></div>
            <div class="left-side-button" :class="{ active: whichRoute === 'vaccination' }" size="lg" variant="outline-primary" @click="openList('vaccination')" to="/vaccination"  block>
              <h3>Вакцинация</h3>
              <p>Узнать информацию о вакцинации</p></div>
          </div>
          <div class="content-divider"></div>
          <router-view class="content-right"></router-view>
<!--          <div class="content-right">-->
<!--            <router-view></router-view>-->
<!--          </div>-->
        </div>

      </b-card>
<!--      <b-card class="main-content mx-5">-->
<!--        <b-button size="lg" variant="outline-primary" to="/workers"   block>Работники</b-button>-->
<!--        <b-button size="lg" variant="outline-primary" to="/village"  block>Поселок</b-button>-->
<!--        <b-button size="lg" variant="outline-primary" to="/farmer"  block>Фермеры</b-button>-->
<!--        <b-button size="lg" variant="outline-primary" to="/livestock"  block>Животные</b-button>-->
<!--        <b-button size="lg" variant="outline-primary" to="/vaccination"  block>Вакцинация</b-button>-->
<!--      </b-card>-->
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
                departments: "",
                whichRoute: 'workers'
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
                    axios({url: 'http://185.22.65.39:7000//employee/Department/', method: 'GET' })

                        .then(resp => {
                            console.log('DEPARTMENT',resp.data)
                            this.departments = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            created() {

                this.$store.dispatch('main')
                    .then(() => {
                        this.todos = data.body
                        console.log("DATA",data)
                    })
                    .catch(err => console.log(err))
            },
            openList(route) {
                this.whichRoute = route
                console.log('route check', route)
                this.$router.push('/mainInput/'+route)
            }
        }
    }

</script>

<style scoped lang="scss">
  .background-block {
    width: 100vw;
    height: 30rem;
    background-color: #1982C4;
    position: absolute;
    z-index: -10;
  }
  .main-input-top {
    padding-top: 3rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    h3 {
      color: #ffffff;
    }
    .add-button {
      width: 10rem;
      background: #FD397A;
      border: 1px solid #FD397A;
      box-sizing: border-box;
      border-radius: 4px;
      color: #ffffff;
    }
  }
  .main-content {
    top: 3rem;
    min-height: 35rem;
    height: auto;
    padding: 1rem;
    /*display: flex;*/
    /*background-color: #ffffff;*/
    /*height: 40rem;*/
    /*background-clip: border-box;*/
    /*border: 1px solid #c8ced3;*/
    /*border-radius: 0.25rem;*/
  }
  .content-left {
    width: 30%;
    padding-right: 2rem;
    .active {
      background: #F4F6F9;
      border-radius: 6.5px;
    }
  }
  .content-divider {
    border-left: 1px solid rgba(216, 220, 230, 0.42);;
  }
  .content-right {
    width: 70%;
  }
  .left-side-button {
    border: none;
    color: #959CB6;
    margin-bottom: 1rem;
    padding: .5rem 1rem .5rem 1rem;
    /*height: 2rem;*/
    h3 {
      color: #50566A;
    }
    p {
      color: #959CB6;
    }
  }
</style>
