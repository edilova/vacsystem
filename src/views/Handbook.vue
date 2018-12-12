<template>
    <div>
      <transition name="slide">

        <b-tabs>
          <b-tab title="Физические лица" active>
            <b-card>
              <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
                <template slot="id" slot-scope="data">
                  <strong>{{data.item.id}}</strong>
                </template>
                <template slot="name" slot-scope="data">
                  <strong>{{data.item.name}}</strong>
                </template>
                <template slot="status" slot-scope="data">
                  <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
                </template>
              </b-table>
              <nav>
                <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
              </nav>
            </b-card>
          </b-tab>
          <b-tab title="Юридические лица" >
            <b-card>
              <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items2" :fields="fields2" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
                <template slot="id" slot-scope="data">
                  <strong>{{data.item.id}}</strong>
                </template>
                <template slot="name" slot-scope="data">
                  <strong>{{data.item.name}}</strong>
                </template>
                <template slot="status" slot-scope="data">
                  <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
                </template>
              </b-table>
              <nav>
                <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
              </nav>
            </b-card>
          </b-tab>
          <b-tab title="Не резиденты" >
            <b-card>
              <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
                <template slot="id" slot-scope="data">
                  <strong>{{data.item.id}}</strong>
                </template>
                <template slot="name" slot-scope="data">
                  <strong>{{data.item.name}}</strong>
                </template>
                <template slot="status" slot-scope="data">
                  <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
                </template>
              </b-table>
              <nav>
                <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
              </nav>
            </b-card>
          </b-tab>
        </b-tabs>


      </transition>
    </div>
</template>

<script>
  import usersData from './users/UsersData'
    export default {
      name: "Handbook",
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
          items2: usersData.filter((user) => user.id >10),
          fields: [
            // {key: 'id'},
            {key: 'name'},
            {key: 'BIN'},
            {key: 'phone'},
            {key: 'mobphone'},
            {key: 'email'}
          ],
          fields2: [
            // {key: 'id'},
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
        }

      }
    }
</script>

<style scoped>

</style>
