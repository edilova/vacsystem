<template>
    <div>
        <div  v-show="dataPage2 == 'notdata2'">
            <b-card>
                <h5 class="text-center mb-3">Информация о провакцинированных животных</h5>

                <b-form>
                    <b-form-group
                            label="ИИН или имя владельца:"
                            label-for="basicName"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicName" type="text" autocomplete="name" v-model="filtername2"></b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="Начало" label-for="date"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input type="date" id="date" v-model="startdate"></b-form-input>
                    </b-form-group>


                    <b-form-group
                            label="Конец" label-for="date"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input type="date" id="date" v-model="enddate"></b-form-input>
                    </b-form-group>


                </b-form>
                <div class="form-actions">
                    <b-button type="submit" variant="primary" @click="repostRequest2('data2')">Сформировать</b-button>
                </div>
            </b-card>
        </div>

        <!--ds{{getFiltered2}}-->
        <div  v-show="dataPage2 == 'data2'">
            <b-card>

                <h5 class="text-center mb-3">Информация о провакцинированных животных</h5>
                <div>
                    дата: {{startdate}} -{{enddate}}<br>
                    ИИН владелеца: {{filtername2}}<br><br><br><br><br>
                </div>
                <!--<div v-for="fer in getFiltered2">{{fer.id}}</div>-->

                <div style="overflow: scroll">
                    <table id="basic-table" class="table">
                        <thead>
                        <th scope="col">Владелец</th>
                        <th scope="col">Животное</th>
                        <th scope="col">Пол</th>
                        <th scope="col">Возраст</th>
                        <th scope="col">Масть</th>
                        </thead>
                        <tbody v-for="fer in getFiltered2">

                        <tr v-for="lv1 in fer.livestocks">
                            <td scope="col">{{fer.name}} </td>
                            <td scope="col">{{lv1.id}} </td>
                            <td scope="col">{{lv1.sex.name}} </td>
                            <td scope="col">{{lv1.age}} </td>
                            <td scope="col">{{lv1.typeoflivestock.name}} </td>
                            <!--<td scope="col">{{fer.livestocks.age}} </td>-->
                            <!--<td scope="col">{{fer.livestocks.typeoflivestock.name}} </td>-->
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--<div class="pagination d-flex flex-row justify-content-between w-100">-->
                    <!--<b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">-->
                        <!--<b-button block variant="primary" class="mb-2" @click="pagebtnPrevious">Пред</b-button>-->
                    <!--</b-col>-->
                    <!--<b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">-->
                        <!--<b-button block variant="primary" class="mb-2" @click="pagebtnNext">След</b-button>-->
                    <!--</b-col>-->
                <!--</div>-->
            </b-card>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import { shuffleArray } from '@/shared/utils'
    import jsPDF from 'jspdf'

    export default {

        data () {
            return {
                id:"",
                employee: "",
                livestock: "",
                medicine:"",
                bloodtest:"",
                date: "",
                isReport: 'reportt',
                selected: null,
                oblast: 'Алматинская Область',
                getVAC: "",
                filtername:"",
                filtername2:"",
                getFiltered:"",
                getFiltered2:"",
                filterid:"",
                dataPage:"notdata",
                dataPage1: "notdata1",
                dataPage2: "notdata2",
                dataPage3: "notdata3",
                linkPrev:"",
                linkNext:"",
                startdate:"",
                enddate:"",

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
                })
            },
            print(){
                // this.$router.push('/print')
                let username = this.filtername
                this.$store.dispatch('printreport1', { username })
                    .then(() => this.$router.push('/print'))
                    .catch(err => console.log(err))
            },
            printreport1({commit}, report){
                console.log("report",report)
                return new Promise((resolve, reject) => {

                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token

                    axios({url: 'http://185.22.65.39:7000/farmer/Farmer/?id='+report, method: 'GET' })

                        .then(resp => {
                            console.log('getFiltered',resp.data)
                            this.getFiltered = resp.data.results
                            this.linkPrev = resp.data.links.previous
                            this.linkNext = resp.data.links.next
                            console.log("ceeewf", this.getFiltered.results.livestocks)
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })
                })
            },

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
                            console.log('get',resp.data)
                            this.getFiltered2 = resp.data.results
                            this.linkPrev = resp.data.links.previous
                            this.linkNext = resp.data.links.next
                            this.getFarmerLength = resp.data.count % 100
                            console.log('pageprev', resp.data)
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
                            console.log('get',resp.data)
                            this.getFiltered2 = resp.data.results
                            this.linkPrev = resp.data.links.previous
                            this.linkNext = resp.data.links.next
                            this.getFarmerLength = resp.data.count % 100
                            console.log('pagenext', resp.data)
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },

            repostRequest2($FullName){
                this.dataPage2 = $FullName
                this.dataPage2 = $FullName
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    console.log("chto otpr",this.filtername2)
                    // axios({url: 'http://185.22.65.39:7000/vaccination/Vaccination/', method: 'GET' })
                    axios({url: 'http://185.22.65.39:7000/farmer/TableFarmer/?name='+this.filtername2+'&id='+this.filtername2+'&start_date='+this.startdate+'&end_date='+this.enddate, method: 'GET' })

                        .then(resp => {
                            console.log('getFiltered2',resp.data)
                            this.getFiltered2 = resp.data.results
                            this.linkPrev = resp.data.links.previous
                            this.linkNext = resp.data.links.next
                            // console.log("Get Filtered2", this.getFiltered2.results)
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })

                })
            },

            reportId ($FullName) {
                // now we have access to the native event
                this.isReport = $FullName
            },
        }
    }



</script>

<style scoped>

</style>