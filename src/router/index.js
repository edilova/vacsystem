import Vue from 'vue'
import Router from 'vue-router'

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


// Views - animalRecords
const RegisteredAnimal = () => import('@/views/animalRecords/RegisteredAnimal')
const DeregisteredAnimal = () => import('@/views/animalRecords/DeregisteredAnimal')
const TransferredAnimal = () => import('@/views/animalRecords/TransferredAnimal')
const FindAnimal = () => import('@/views/animalRecords/FindAnimal')



const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/pages/login',
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
          component: Main
        },
        {
          path: 'reports',
          name: 'Отчеты',
          component: Reports
        },
        {
          path: 'handbook',
          name: 'Справочник',
          component: Handbook
        },
        {
          path: 'mainInput',
          name: 'Ввод данных',
          component: MainInput,

        },
        {
          path: 'workers',
          name: 'Работники',
          component: Workers
        },
        {
          path: 'addworkers',
          name: 'Добавить Работника',
          component: Addworkers
        },
        {
          path: 'village',
          name: 'Поселок',
          component: Village
        },
        {
          path: 'addvillage',
          name: 'Добавить поселок',
          component: Addvillage
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
          name: 'Zhivotnoe',
          component: Livestock
        },
        {
          path: 'addlivestock',
          name: 'LIVESTOCK',
          component: Addlivestock
        },
        {
          path: 'vaccination',
          name: 'vaccination',
          component: Vaccination
        },

        {
          path: 'bloodtest',
          name: 'KROV',
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
              name: 'AddressesMIO',
              component: AddressesMIO
            },
            {
              path: 'addressesTIKVKN',
              name: 'AddressesTIKVKN',
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
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
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
        {
          path: 'login',
          name: 'Login',
          component: Login
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
