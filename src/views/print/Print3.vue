<template>
    <div>
        <div  v-show="dataPage3 == 'notdata3'">
            <b-card>
                <h5 class="text-center mb-3">Информация о вакцинации и дате вакцинации животного</h5>

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
                    <b-button type="submit" variant="primary" @click="repostRequest2('data3')">Сформировать</b-button>
                </div>
            </b-card>
        </div>
        <div  v-show="dataPage3 == 'data3'">
            <b-card>
                <h5 class="text-center mb-3">Информация о вакцинации и дате вакцинации животного</h5>
                <div>
                    дата: {{startdate}} -{{enddate}}<br>
                    ИИН владелеца: {{filtername2}}<br><br><br><br><br>
                </div>
                <div style="overflow: scroll">
                    <table id="basic-table" class="table">
                        <thead>
                        <th scope="col">Животное</th>
                        <th scope="col" v-for="ferr in DiseaseList">{{ferr.name}}</th>
                        </thead>
                        <tbody>
                        <tr v-for="fer in getFiltered2">
                            <td scope="col">{{fer.livestock.id}} </td>
                            <td scope="col" v-for="fer in getFiltered2">{{fer.date}} </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination d-flex flex-row justify-content-between w-100">
                    <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                        <b-button block variant="primary" class="mb-2" @click="pagebtnPrevious">Пред</b-button>
                    </b-col>
                    <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                        <b-button block variant="primary" class="mb-2" @click="pagebtnNext">След</b-button>
                    </b-col>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import { shuffleArray } from '@/shared/utils'

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
                DiseaseList: "",

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

            repostRequest($FullName){
                this.dataPage = $FullName
                this.dataPage1 = $FullName
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    // axios({url: 'http://185.22.65.39:7000/vaccination/Vaccination/', method: 'GET' })
                    axios({url: 'http://185.22.65.39:7000/farmer/Farmer/?id='+this.filtername, method: 'GET' })

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
            repostRequest2($FullName){
                this.dataPage3 = $FullName
                this.dataPage3 = $FullName
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    console.log("chto otpr",this.filtername2)


                    // For Disease List

                    axios({url: 'http://185.22.65.39:7000/vaccination/Disease/', method: 'GET' })

                        .then(resp => {
                            console.log('Disease List',resp.data)
                            this.DiseaseList = resp.data.results
                            resolve(resp)


                        })
                        .catch(err => {console.log(err)
                        })



                    // axios({url: 'http://185.22.65.39:7000/vaccination/Vaccination/', method: 'GET' })
                    axios({url: 'http://185.22.65.39:7000/vaccination/TableVaccination/?name='+this.filtername2+'&id='+this.filtername2+'&start_date='+this.startdate+'&end_date='+this.enddate, method: 'GET' })

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


                    // var str1 = ""
                    // for (var var1 in this.DiseaseList){
                    //
                    //     str1 += this.DiseaseList[var1];
                    //     console.log("ALOO",str1)
                    //
                    //
                    // }
                })
            },
            createReport(){
                let farname = this.farname
                console.log("Imya fermera",farname)

                this.$store.dispatch('createReport', {farname})
                    .then(() => {
                        this.$router.push('/farmer')

                    })
                    .catch(err => console.log(err))

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