<template>
    <div>
        <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
            <b-button block variant="primary" class="mb-2" to="/addlivestock">Добавить животное</b-button>
        </b-col>
        <b-col lg="12">
            <div>
                <!--LENGTH {{lvlength}}-->
                <!--<b-row>-->
                    <!--&lt;!&ndash;{{getLivestock}}&ndash;&gt;-->
                    <!--<b-col cols="12" xl="12">-->
                        <!--<transition name="slide">-->
                            <!--ary-->
                            <!--<b-card :header="caption">-->
                                <!--<b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">-->
                                    <!--<template slot="id" slot-scope="data">-->
                                        <!--<strong>{{getLivestock.id}}</strong>-->
                                    <!--</template>-->
                                    <!--<template slot="name" slot-scope="data">-->
                                        <!--<strong>{{getLivestock.name}}</strong>-->
                                    <!--</template>-->
                                    <!--&lt;!&ndash;<template slot="status" slot-scope="data">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</template>&ndash;&gt;-->
                                <!--</b-table>-->
                                <!--<nav>-->
                                    <!--<b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>-->
                                <!--</nav>-->
                            <!--</b-card>-->
                        <!--</transition>-->
                    <!--</b-col>-->
                <!--</b-row>-->


                <!--<b-card>-->
                    <!--<table class="table" :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">-->
                        <!--<thead>-->
                        <!--<tr>-->
                            <!--<th scope="col">id</th>-->
                            <!--<th scope="col">Возраст</th>-->
                            <!--<th scope="col">Владелец</th>-->
                            <!--<th scope="col">Место рождения</th>-->
                            <!--<th scope="col">Пол</th>-->
                            <!--<th scope="col">Вид</th>-->
                        <!--</tr>-->
                        <!--</thead>-->
                        <!--<tbody v-for="lv in getLivestock">-->
                        <!--<tr>-->
                            <!--<td>{{lv.id}}</td>-->
                            <!--<td>{{lv.age}}</td>-->
                            <!--<td>{{lv.farmer}}</td>-->
                            <!--<td>{{lv.placeofbirth}}</td>-->
                            <!--<td>{{lv.sex}}</td>-->
                            <!--<td>{{lv.typeoflivestock}}</td>-->
                        <!--</tr>-->
                        <!--</tbody>-->
                    <!--</table>-->
                    <!--<b-pagination align="right" :total-rows="totalRows" v-model="currentPage" :per-page="perPage">-->
                    <!--</b-pagination>-->
                <!--</b-card>-->

            </div>
        </b-col>
    </div>
</template>

<script>
    import cTable from './Table.vue'
    import usersData from '../users/UsersData'
    import axios from 'axios'

    export default {
        name: "Livestock",
        inheritAttrs: false,
        props: {
            caption: {
                type: String,
                default: 'Table'
            },
            hover: {
                type: Boolean,
                default: false
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
                default: 5
            },
            dark: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            items: function() {
                const items =  this.tableData
                return Array.isArray(items) ? items : items()
            },
            totalRows: function () { return this.getRowCount() },
            captions: function() { return this.fields },
            displayedPosts () {
                return this.paginate(this.posts);
            }
        },
        data: () => {
            return {
                // items: "",
                items: usersData.filter((user) => user.id < 42),
                getLivestock: "",
                currentPage: 1,
                lvlength: "",
                page: 1,
            }
        },
        created: function () {
            this.fetchData();
        },
        watch: {
            posts () {
                this.setPages();
            }
        },
        methods: {


            getBadge (status) {
                return status === 'Active' ? 'success'
                    : status === 'Inactive' ? 'secondary'
                        : status === 'Pending' ? 'warning'
                            : status === 'Banned' ? 'danger' : 'primary'
            },
            getRowCount: function () {
                return this.items.length
            },
            // getRowCount (items) {
            //     return items.length
            // },


            fetchData: function () {
                return new Promise((resolve, reject) => {
                    // commit('auth_request')
                    console.log('promise example ARU 29 01 2019');
                    const token = sessionStorage.getItem('token');
                    axios.defaults.headers.common['Authorization'] = "Token " + token
                    console.log(axios.defaults.headers, 'headers in get');

                    axios({url: 'http://185.22.65.39:7000/livestock/LiveStock/', method: 'GET' })

                        .then(resp => {
                            console.log('getLivestock 02 2019',resp.data)
                            this.getLivestock = resp.data.results
                            // this.getLivestock = resp.data.results

                            // this.items = this.getLivestock.filter((user) => user.id < 42),
                            // this.lvlength = resp.data.result.length
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
