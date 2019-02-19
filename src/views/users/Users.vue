<template>
  <b-row>
    {{getLivestock}}
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
          <template slot="id" slot-scope="data">
            <strong>{{getLivestock.id}}</strong>
          </template>
          <template slot="name" slot-scope="data">
            <strong>{{getLivestock.name}}</strong>
          </template>
          <!--<template slot="status" slot-scope="data">-->
            <!--<b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>-->
          <!--</template>-->
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import usersData from './UsersData'
import axios from 'axios'
export default {
  name: 'Users',
  props: {
    caption: {
      type: String,
      default: 'Users'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
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
    }
  },
  data: () => {
    return {
      items: usersData.filter((user) => user.id < 42),
        getLivestock:"",
      fields: [
        {key: 'name'},
        {key: 'BIN'},
        {key: 'phone'},
        {key: 'mobphone'},
        {key: 'email'}
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0
    }
  },
  computed: {
  },
    created: function () {
        this.fetchData();
    },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.id)
      this.$router.push({path: userLink})
    },



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
                      this.lvlength = resp.data.count
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
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
