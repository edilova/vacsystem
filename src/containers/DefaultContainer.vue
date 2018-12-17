<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="/main">
        <h3>VAC</h3>
        <!--<img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">-->
        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <!--<b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>-->
        <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>
        <!--<b-nav-item class="px-3">Settings</b-nav-item>-->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!--<b-nav-item class="d-md-down-none">-->
          <!--<i class="icon-bell"></i>-->
          <!--<b-badge pill variant="danger">5</b-badge>-->
        <!--</b-nav-item>-->
        <!--<b-nav-item class="d-md-down-none">-->
          <!--<i class="icon-list"></i>-->
        <!--</b-nav-item>-->
        <!--<b-nav-item class="d-md-down-none">-->
          <!--<i class="icon-location-pin"></i>-->
        <!--</b-nav-item>-->
        <b-nav-item class="px-3" @click="logout" exact>Log out</b-nav-item>
        <!--<DefaultHeaderDropdownAccnt/>-->
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />

    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import $ from 'jquery'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
        token:  sessionStorage.getItem('access_token') ,
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  },
  methods:{
      // logout(){
      //     console.log("in logout")
      //     this.token === sessionStorage.removeItem('access_token')
      //     console.log(this.token)
      //     console.log("SESSION")
      //     this.$router.push({ name: 'Login', query: { redirect: '/login' } });
      // }

      logout: function () {
          this.$store.dispatch('logout')
              .then(() => {
                  this.$router.push('/login')
              })
      }
  }
}
</script>
