export default {
  items: [
    // {
    //   name: 'Главная',
    //   url: '/dashboard',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'primary',
    //     // text: 'NEW'
    //   }
    // },
    {
      name: 'Главная',
      url: '/main',
      icon: 'icon-speedometer',
      meta:{
          requiresAuth: true,
      },
      badge: {
        variant: 'primary',
        // text: 'NEW'
      },
    },
    // {
    //   name: 'Учет животных',
    //   url: '/animalRecords',
    //   icon: 'icon-puzzle',
    //   children: [
    //     {
    //       name: 'Реестр зарегистрированных животных',
    //       url: '/animalRecords/registeredAnimal',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Реестр снятых с учета животных',
    //       url: '/animalRecords/deregisteredAnimal',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Реестр переданных животных',
    //       url: '/animalRecords/transferredAnimal',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Поиск животного',
    //       url: '/animalRecords/findAnimal',
    //       icon: 'icon-puzzle'
    //     }
    //   ]
    // },
    // {
    //   name: 'Групп. операции',
    //   url: '/groupOperations',
    //   icon: 'icon-pencil'
    // },
    {
      name: 'Отчеты',
      url: '/reports',
      icon: 'icon-pencil',
        meta:{
            requiresAuth: true,
        },
    },
    // {
    //   name: 'Справочники',
    //   url: '/handbook',
    //   icon: 'icon-pencil',
    //     meta:{
    //         requiresAuth: true,
    //     },
    // },
    // {
    //   name: 'Настройки',
    //   url: '/settings',
    //   icon: 'icon-pencil',
    //     meta:{
    //         requiresAuth: true,
    //     },
    // },
    // {
    //   title: true,
    //   name: 'Components',
    //   class: '',
    //   wrapper: {
    //     element: '',
    //     attributes: {}
    //   }
    // },
    {
      name: 'Контакты',
      url: '/contacts',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Контакты МИО',
          url: '/contacts/addressesMIO',
          icon: 'icon-puzzle'
        },
        {
          name: 'Контакты ТИ КВКН',
          url: '/contacts/addressesTIKVKN',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Ввод данных',
      url: '/mainInput',
      icon: 'icon-pencil'
    },
      // {
      //     name: 'Отчеты',
      //     url: '/print',
      //     icon: 'icon-pencil'
      // },

    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'CoreUI Icons',
    //       url: '/icons/coreui-icons',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'info',
    //         text: 'NEW'
    //       }
    //     },
    //     {
    //       name: 'Flags',
    //       url: '/icons/flags',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7'
    //       }
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star'
    //     }
    //   ]
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
        // {
        //   name: 'Alerts',
        //   url: '/notifications/alerts',
        //   icon: 'icon-bell'
        // },
        // {
        //   name: 'Badges',
        //   url: '/notifications/badges',
        //   icon: 'icon-bell'
        // },
        // {
        //   name: 'Modals',
        //   url: '/notifications/modals',
        //   icon: 'icon-bell'
        // }
    //   ]
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'primary',
    //     text: 'NEW'
    //   }
    // },
    {
      divider: true
    },
    // {
    //   title: true,
    //   name: 'Extras'
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/pages/login',
    //       icon: 'icon-star',
    //         meta: {
    //             requiresVisitor: true
    //         }
    //     },
    //     {
    //       name: 'Register',
    //       url: '/pages/register',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Logon',
    //       url: '/pages/logon',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/pages/500',
    //       icon: 'icon-star'
    //     }
    //   ]
    // }
  ]
}
