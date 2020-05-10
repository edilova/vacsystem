<template>
  <div class="app">
    <AppHeader fixed>
      <div class="main-header">

        <div class="d-flex align-items-center">
          <img class="main-logo" src="../assets/landing/logo.png" width="40" height="40" alt="CoreUI Logo" style="border-radius: 4px;">
        </div>
        <div @click="getRoute('main')" class="main-links" :class="{ active: activeTab === 'main' }">Главная</div>
        <div @click="getRoute('report')" class="main-links" :class="{ active: activeTab === 'report' }">Отчеты</div>
        <div class="dropdown-for-report" v-if="openReports">
          <div class="dropdown-links" @click="getRoute('print')">Общий отчет</div>
          <div class="dropdown-links" @click="getRoute('print2')">Отчет вакцинированных животных</div>
          <div class="dropdown-links" @click="getRoute('print4')">Отчет крови</div>
        </div>
        <div @click="getRoute('mainInput')" class="main-links" :class="{ active: activeTab === 'mainInput' }">Данные</div>
        <div @click="getRoute('contacts')" class="main-links" :class="{ active: activeTab === 'contacts' }">Контакты</div>
      </div>
      <div class="main-logout" @click="logout">
        Выйти
      </div>



<!--      <SidebarToggler class="d-lg-none" display="md" mobile />-->
<!--      <b-link class="navbar-brand" to="/main">-->
<!--        <h3>VAC</h3>-->
<!--        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">-->
<!--      </b-link>-->
<!--      <SidebarToggler class="d-md-down-none" display="lg" />-->
<!--      <b-navbar-nav class="d-md-down-none">-->
<!--      </b-navbar-nav>-->
<!--      <b-navbar-nav class="ml-auto">-->
<!--        <b-nav-item class="px-3" @click="logout" exact>Выйти</b-nav-item>-->
<!--      </b-navbar-nav>-->
<!--      <div class="mr-4"></div>-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
      </AppSidebar>
      <main class="main">
<!--        <Breadcrumb :list="list"/>-->
        <div class="">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
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
      nav: nav.items,
      activeClass: 'active',
      openReports: false,
      activeTab: 'main'
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    },
    // currentPage() {
    //   console.log('CURRENT STAGE', this.$route.path)
    //   return this.$route.path;
    // }
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
                  this.$router.push('/landing')
              })
      },
      getRoute(route) {
          this.activeTab = route
          if (route === 'report') {
              this.openReports = true;
          } else {
              this.openReports = false;
              this.$router.push('/'+route)
          }
      }
  }
}
</script>

<style lang="scss">
  .main-header {
    display: flex;
    flex-direction: row;
    color: #ffffff;
    .dropdown-for-report {
      display: block;
    }
  }
  .navbar {
    width: 2rem;
    /*display: flex;*/
    /*justify-content: flex-start;*/
    padding-left: 3rem;
    padding-right: 3rem;
    background-color: #2D9CDB;
    .main-logo {
      margin-right: 2rem;
    }
    a, .main-logout {
      font-size: 1.3rem;
      color: #fff;
    }
    .active {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      text-decoration: none;
      padding: .5rem 1rem .5rem 1rem;
    }
  }
  .app-header {
    border-bottom: 1px solid rgba(250, 250, 250, 0.1);
  }
  .main-links {
    font-size: 1.3rem;
    padding: .5rem 1.5rem .5rem 1.5rem;
    margin-right: 2rem;
  }
  .dropdown-for-report {
    display: none;
    width: 30rem;
    height: auto;
    margin-top: 3rem;
    left: 17.4rem;
    background-color: #ffffff;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    position: absolute;
    box-shadow: 0px 0px 13px rgba(38, 26, 52, 0.4);
    .dropdown-links {
      height: 2.5rem;
      display: flex;
      align-items: center;
      padding-left: 1rem;
      border-bottom: 1px solid #e5e9f4;
      color: #333333;
      text-decoration: none;
      &:last-child {
        border-bottom: none;
      }
    }
    .dropdown-links:hover {
      background-color: rgba(82, 63, 105, 0.05);
      color: #333333;
    }
  }
</style>
