<template>


    <div class="">
        <div  v-show="dataPage == 'notdata'">
            <b-card>
                <h5 class="text-center mb-3">Информация о владельце по ИИН или имени</h5>

                <b-form>
                    <b-form-group
                            label="ИИН или имя владельца:"
                            label-for="basicName"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-input id="basicName" type="text" autocomplete="name" v-model="filtername"></b-form-input>
                    </b-form-group>

                </b-form>
                <div class="form-actions">
                    <b-button type="submit" variant="primary" @click="repostRequest('data')">Сформировать</b-button>
                </div>
            </b-card>
        </div>
        <div  v-show="dataPage == 'data'">
            <div>
                <!--<button @click="print()">-->
                <!--Печать-->
                <!--</button>-->
                <div v-for="nam in getFiltered">
                    <p class="mt-1" style="font-size: 1.5rem;">Данные о владельце {{nam.name}}</p>
                </div>

                <table id="basic-table" class="table">
                    <thead>
                    <tr>
                        <th scope="col">ИИН владельца</th>
                        <th scope="col">Имя владельца</th>
                        <th scope="col">Номер телефона</th>
                        <th scope="col">Почта</th>
                        <th scope="col">Адресс</th>
                        <th scope="col">Поселок</th>
                        <th scope="col">Кол-во скота</th>
                    </tr>
                    </thead>
                    <tbody v-for="far in getFiltered">
                    <tr>
                        <td v-model="id">{{far.id}}</td>
                        <td v-model="employee">{{far.name}}</td>
                        <td v-model="livestock">{{far.phone}}</td>
                        <td v-model="medicine">{{far.email}}</td>
                        <td v-model="bloodtest">{{far.address}}</td>
                        <td v-model="date">{{far.village.name}}</td>
                        <td v-model="date">{{far.livestocks.length}}</td>
                    </tr>
                    <!--<p class="mt-5" style="font-size: 1.5rem;"> Данные о животных владельца {{far.name}}</p>-->
                    </tbody>
                </table>



                <div v-for="nam in getFiltered">
                    <p class="mt-5" style="font-size: 1.5rem;">Данные о животных владельца {{nam.name}}</p>
                </div>



                <table id="basic-table" class="table">
                    <thead>
                    <tr>
                        <th scope="col">Номер животного</th>
                        <th scope="col">Возраст</th>
                        <th scope="col">Место рождения</th>
                        <th scope="col">Тип животного</th>
                        <th scope="col">Пол животного</th>
                    </tr>
                    </thead>

                    <tbody v-for="cv in getFiltered">
                    <tr v-for="fil in cv.livestocks">
                        <td v-model="id">{{fil.id}}</td>
                        <td v-model="employee">{{fil.age}} месяцев</td>
                        <td v-model="livestock">{{fil.placeofbirth.name}}</td>
                        <td v-model="medicine">{{fil.typeoflivestock.name}}</td>
                        <td v-model="bloodtest">{{fil.sex.name}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>

    import downloadexcel from "vue-json-excel";
    import axios from 'axios';
    import { shuffleArray } from '@/shared/utils'
    import cTable from '../base/Table.vue'
    import jsPDF from 'jspdf'

    const someData = () => shuffleArray([
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
        {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},

    ])

    function generate() {

        var doc = new jsPDF('p', 'pt');

        var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
        doc.autoTable(res.columns, res.data, {margin: {top: 80}});

        var header = function(data) {
            doc.setFontSize(18);
            doc.setTextColor(40);
            doc.setFontStyle('normal');
            //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
            doc.text("Testing Report", data.settings.margin.left, 50);
        };

        var options = {
            beforePageContent: header,
            margin: {
                top: 80
            },
            startY: doc.autoTableEndPosY() + 20
        };

        doc.autoTable(res.columns, res.data, options);

        doc.save("table.pdf");
    }

    export default {
        name: 'c-table',

        inheritAttrs: false,
        props: {
            caption: {
                type: String,
                default: 'Table'
            },
            hover: {
                type: Boolean,
                default: true
            },
            striped: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            },
            fixed: {
                type: Boolean,
                default: false
            },
            tableData: {
                type: [Array, Function],
                default: () => []
            },
            fields: {
                type: [Array, Object],
                default: () => []
            },
            perPage: {
                type: Number,
                default: 10
            },
            dark: {
                type: Boolean,
                default: false
            }
        },
        data: () => {
            return {
                currentPage: 1,
            }
        },
        computed: {
            items: function() {
                const items =  this.tableData
                return Array.isArray(items) ? items : items()
            },
            totalRows: function () { return this.getRowCount() },
            captions: function() { return this.fields }
        },

        name: "reports",
        components: {
            cTable,
            downloadexcel
        },

        data () {
            return {
                // seen: truee,
                // type: 'A',
                todos: [],
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
                options: [
                    { value: null, text: 'Please select an option' },
                    { value: 'Australia', text: 'Australia' },
                    { value: 'China', text: 'China' },
                    { value: 'America', text: 'America' },
                    { value: 'Russia', text: 'Russia'}
                ],

                Names: [
                    {
                        Name: "report1",
                        FullName: "report1"
                    },
                    {
                        Name: "report2",
                        FullName: 'report2'
                    },
                    {
                        Name: "report3",
                        FullName: "report3"
                    },
                    {
                        Name: "report4",
                        FullName: "report4"
                    }
                ],
                items: someData,
                itemsArray: someData(),

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




                    //get Department
                    // axios({url: 'http://185.22.65.39:7000/vaccination/TableVaccination/?name='+'&id='+'&start_date='+'12.02.2019'+'&end_date='+'18.02.2019' , method: 'GET' })
                    //
                    //     .then(resp => {
                    //         // console.log('getFarmer',resp.data)
                    //         this.getFarmer = resp.data.results
                    //         this.linkPrev = resp.data.links.previous
                    //         this.linkNext = resp.data.links.next
                    //         this.getFarmerLength = resp.data.count % 100
                    //         // console.log('LENGTHHHHH', resp.data.count)
                    //         resolve(resp)
                    //
                    //
                    //     })
                    //     .catch(err => {console.log(err)
                    //     })


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
                    console.log(this.filtername)
                    // axios({url: 'http://185.22.65.39:7000/vaccination/Vaccination/', method: 'GET' })
                    axios({url: 'http://185.22.65.39:7000/farmer/TableFarmer/?id='+this.filtername, method: 'GET' })

                        .then(resp => {

                            if(isNaN(this.filtername)){

                                alert("Введите ИИН владельца");
                                this.$router.push('/reports')

                                // document.write(this.filtername + " is not a number <br/>");
                            }else{
                                console.log('getFiltered',resp.data)
                                this.getFiltered = resp.data.results
                                this.linkPrev = resp.data.links.previous
                                this.linkNext = resp.data.links.next
                                console.log("ceeewf", this.getFiltered.results.livestocks)
                                resolve(resp)
                                // alert("I am an alert box!");
                                // document.write(this.filtername + " is a number <br/>");
                            }



                        })
                        .catch(err => {console.log(err)
                        })

                })
            },
            repostRequest2($FullName){
                this.dataPage = $FullName
                this.dataPage1 = $FullName
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    //get Department
                    console.log("chto otpr",this.filtername2)
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

            createPDF () {
                let pdfName = 'test';
                var doc = new jsPDF();
                doc.text("Hello World", 10, 10);
                doc.save(pdfName + '.pdf');
            },
            generate(){


                var doc = new jsPDF('p', 'pt');

                var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
                doc.autoTable(res.columns, res.data, {margin: {top: 80}});

                var header = function(data) {
                    doc.setFontSize(18);
                    doc.setTextColor(40);
                    doc.setFontStyle('normal');
                    //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
                    doc.text("Testing Report", data.settings.margin.left, 50);
                };

                var options = {
                    beforePageContent: header,
                    margin: {
                        top: 80
                    },
                    startY: doc.autoTableEndPosY() + 20
                };

                doc.autoTable(res.columns, res.data, options);

                doc.save("table.pdf");
            },
            generate2(){


                var doc = new jsPDF('p', 'pt');

                var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
                doc.autoTable(res.columns, res.data, {margin: {top: 80}});

                var header = function(data) {
                    doc.setFontSize(18);
                    doc.setTextColor(40);
                    doc.setFontStyle('normal');
                    //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
                    doc.text("Testing Report", data.settings.margin.left, 50);
                };

                var options = {
                    beforePageContent: header,
                    margin: {
                        top: 80
                    },
                    startY: doc.autoTableEndPosY() + 20
                };

                doc.autoTable(res.columns, res.data, options);

                doc.save("table.pdf");
            },
            reportId ($FullName) {
                // now we have access to the native event
                this.isReport = $FullName
            },
            getBadge (status) {
                return status === 'Active' ? 'success'
                    : status === 'Inactive' ? 'secondary'
                        : status === 'Pending' ? 'warning'
                            : status === 'Banned' ? 'danger' : 'primary'
            },
            getRowCount: function () {
                return this.items.length
            }
        }
    }



</script>

<style scoped>

</style>
