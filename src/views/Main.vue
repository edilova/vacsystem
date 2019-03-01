<template>
    <div>
      <b-card>
        <div class="back-color">
          <h5 class=" w-75 font-italic mx-auto mb-3">Система вакцинации - программный продукт разработки, позволяющий пользователю системы с
            помощью панели веб-приложения осуществлять контроль вакцинации животных, вести их учёт и
            получать необходимую документацию в электроннй или печатной форме, также вакцинаторам с помощью
            мобильного приложения  осуществлять вакцинации по идентифицированному коду животного</h5>
        </div>

        <br>
        <div class="grey-color w-75 mx-auto mb-5">
          <p class="my-3"><strong>Основные цели системы:</strong></p>
          <p>1.обеспечение учёта вакцинаций сельскохозяйственных животных на територии Казахстана,</p>
          <p>2.локализация и предотвращение распространения эпидемий, в первую очередь опасных для здоровья человека,</p>
          <p>3.организация взаимодействия между вакцинаторами и операторов,</p>
          <p>4.выполнение нормативных требований государства в сфере вакцинирования</p>
        </div>

        <div class="grey-color w-75 mx-auto">
          <p class="my-3"><strong>Функциональные возможности системы:</strong></p>
          <p>1.регистрация владельца с присвоением уникального номера (ID код)</p>
          <p>2.регистрация животных и учет их ID кода в программе 3)фиксация и архивирование данных по вакцинациям животных</p>
          <p>4.формирование заданий на проведение санитарно-ветеринарных мероприятий и вакцинаций с использованием расходных материалов с нанесенным штрих-кодом и привязкой к ID коду животного для дальнейшей отправки в отчетность,</p>
          <p>5.вакцинация животных со стационарных и мобильных устройств, имеющих доступ к сети Интернет</p>
        </div>
      </b-card>
    </div>
</template>


<script>


  import downloadexcel from "vue-json-excel";
  import axios from 'axios';


  export default {
        name: "Main",
      components: {
        downloadexcel,
      },
      data: () => {
        return {
          todos: [],
            getFarmer:"",
            nur: "",
            info: "",
            nurLen: "",
            nurlist: "",
            searchText:"",
            result:"",
            filter: "1",

            animals: ['Zebra', 'Lion', 'Shark', 'Dog', 'Bear', 'Monkey'],
          json_fields: {
            'Complete name': 'name',
            'Date': 'date',
            'ed': 'city',
            'saf': 'birthdate'
          },
          json_data: [
            {
              'name': 'Tony Peña',
              'city': 'New York',
              'country': 'United States',
              'birthdate': '1978-03-15',
              'phone': {
                'mobile': '1-541-754-3010',
                'landline': '(541) 754-3010'
              }
            },
            {
              'name': 'Thessaloniki',
              'city': 'Athens',
              'country': 'Greece',
              'birthdate': '1987-11-23',
              'phone': {
                'mobile': '+1 855 275 5071',
                'landline': '(2741) 2621-244'
              }
            }
          ],
          json_meta: [
            [
              {
                'key': 'charset',
                'value': 'utf-8'
              }
            ]
          ],
        }
      },

      created: function () {
          this.fetchData();
      },
      mounted() {
          const token = sessionStorage.getItem('token');
          axios.defaults.headers.common['Authorization'] = "Token " + token
          axios.get('http://185.22.65.39:7000//livestock/LiveStock/')
              .then(response => {
                  // this.logItems = response.data // this bit works fine
                  this.responseData = response
              })
              .catch(err => {console.log(err)
              })
      },
      computed: {
          filteredAnimals: function() {
              var self = this;
              return this.animals.filter(function (animal) {
                  return _.includes(animal.toLowerCase(), self.searchText.toLowerCase());
              });
          },
          resultCount () {
              return this.nur && this.nur.length
          },
          resultCount2 () {
              return this.nur.typeoflivestock=="1" && this.nur.typeoflivestock.length
          },
          orderedUsers: function () {
              return _.orderBy(this.users, 'typeoflivestock')
          }

      },
      methods:{
          fetchData: function () {
              return new Promise((resolve, reject) => {
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  axios({url: 'http://185.22.65.39:7000//livestock/LiveStock/', method: 'GET' })

                      .then(resp => {
                          console.log('LIVESTOCK',resp.data)
                          this.nur = resp.data.results
                          console.log("OOoOOOOO",this.nur)
                          // for(i in nur){
                          //     if(i.id != 1){
                          //         console.log("1")
                          //     }
                          // }


                          this.result = this.nur.length;

                      })
                      .catch(err => {console.log(err)
                      })

              })

          },
            Nur(){

                const token = sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = "Token " + token
                axios({url: 'http://185.22.65.39:7000//livestock/LiveStock/', method: 'GET' })

                    .then(resp => {
                        console.log('LIVESTOCK',resp.data)
                        this.nur = resp.data.results
                        this.nurList =  this.nur.filter(function (animal) {
                            return _.includes(animal.toLowerCase(), self.searchText.toLowerCase());
                        });

                        // resolve(resp)
                    })
                    .catch(err => {console.log(err)
                    })
            },


          Nur2(){
              let id = "2323"
              this.$store.dispatch('nur', { id})
                  .then(() => {

                  })
                  .catch(err => console.log(err))

          },
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


</script>

<style scoped>
  .back-color{
    color: #17799c;
  }
  .grey-color{
    color: #666;
  }

</style>
