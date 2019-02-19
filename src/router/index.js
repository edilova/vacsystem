import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'


// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Main = () => import('@/views/Main')
const Reports = () => import('@/views/Reports')
const Handbook = () => import('@/views/Handbook')
const Settings = () => import('@/views/Settings')
const GroupOperations = () => import('@/views/GroupOperations')
const MainInput = () => import('@/views/MainInput')
// const Report1 = () => import('@/views/report/Report1')


// Views - Contacts
const AddressesMIO = () => import('@/views/contacts/AddressesMIO')
const AddressesTIKVKN = () => import('@/views/contacts/AddressesTIKVKN')

// Views - Main Inputs
const Workers = () => import('@/views/forInput/Workers')
const Village = () => import('@/views/forInput/Village')
const Farmer = () => import('@/views/forInput/Farmer')
const Livestock = () => import('@/views/forInput/Livestock')
const Vaccination = () => import('@/views/forInput/Vaccination')
const Bloodtest = () => import('@/views/forInput/Bloodtest')


const Addworkers = () => import('@/views/forInput/Addworkers')
const Addvillage = () => import('@/views/forInput/Addvillage')
const Addfarmer = () => import('@/views/forInput/Addfarmer')
const Addlivestock = () => import('@/views/forInput/Addlivestock')
const Addvaccination = () => import('@/views/forInput/Addvaccination')


// Views - animalRecords
const RegisteredAnimal = () => import('@/views/animalRecords/RegisteredAnimal')
const DeregisteredAnimal = () => import('@/views/animalRecords/DeregisteredAnimal')
const TransferredAnimal = () => import('@/views/animalRecords/TransferredAnimal')
const FindAnimal = () => import('@/views/animalRecords/FindAnimal')


// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Logon = () => import('@/views/pages/Logon')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

let router =  new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/main',
      name: 'Начало',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'main',
          name: 'Главная',
          component: Main,
            meta: {
                requiresAuth: true
            }
        },
        {
          path: 'reports',
          name: 'Отчеты',
          component: Reports,
            meta: {
                requiresAuth: true
            }
        },

        {
          path: 'handbook',
          name: 'Справочник',
          component: Handbook,
            meta: {
                requiresAuth: true
            }
        },
        {
          path: 'mainInput',
          name: 'Ввод данных',
          component: MainInput,
            meta: {
                requiresAuth: true
            }

        },
        {
          path: 'workers',
          name: 'Работники',
          component: Workers,
            meta: {
                requiresAuth: true
            }
        },
          // {
          //     path: 'report1',
          //     name: 'Отчет номер 1',
          //     component: Report1,
          //     meta: {
          //         requiresAuth: true
          //     }
          // },
        {
          path: 'addworkers',
          name: 'Добавить Работника',
          component: Addworkers,
            meta: {
                requiresAuth: true
            }
        },
        {
          path: 'village',
          name: 'Поселок',
          component: Village,
            meta: {
                requiresAuth: true
            }
        },
        {
          path: 'addvillage',
          name: 'Добавить поселок',
          component: Addvillage,
            meta: {
                requiresAuth: true
            }
        },
        {
          path: 'farmer',
          name: 'Фермеры',
          component: Farmer
        },
        {
          path: 'addfarmer',
          name: 'Добавить фермера',
          component: Addfarmer
        },
        {
          path: 'livestock',
          name: 'Скот',
          component: Livestock
        },
        {
          path: 'addlivestock',
          name: 'Скот',
          component: Addlivestock
        },
        {
          path: 'addvaccination',
          name: 'Добавить вакцину',
          component: Addvaccination
        },
        {
          path: 'vaccination',
          name: 'Вакцина',
          component: Vaccination
        },

        {
          path: 'bloodtest',
          name: 'Кровь',
          component: Bloodtest
        },
        {
          path: 'settings',
          name: 'Настройки',
          component: Settings
        },
        {
          path: 'groupOperations',
          name: 'GroupOperations',
          component: GroupOperations
        },
        {
          path: 'contacts',
          redirect: '/contacts/addressesMIO',
          name: 'Контакты',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'addressesMIO',
              name: 'Контакты МИО',
              component: AddressesMIO
            },
            {
              path: 'addressesTIKVKN',
              name: 'Контакты ТИ КВКН',
              component: AddressesTIKVKN
            }
          ]
        },
        {
          path: 'animalRecords',
          redirect: '/animalRecords/registeredAnimal',
          name: 'Contacts',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'registeredAnimal',
              name: 'RegisteredAnimal',
              component: RegisteredAnimal
            },
            {
              path: 'deregisteredAnimal',
              name: 'DeregisteredAnimal',
              component: DeregisteredAnimal
            },
            {
              path: 'transferredAnimal',
              name: 'TransferredAnimal',
              component: TransferredAnimal
            },
            {
              path: 'findAnimal',
              name: 'FindAnimal',
              component: FindAnimal
            }
          ]
        },
      ]
    },
      {
          path: '/login',
          name: 'Login',
          component: Login
      },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        // {
        //   path: 'login',
        //   name: 'Login',
        //   component: Login
        // },
          {
              path: 'logon',
              name: 'Logon',
              component: Logon
          },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})



router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router