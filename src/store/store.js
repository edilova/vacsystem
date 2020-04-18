import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: sessionStorage.getItem('token') || '',
        user : {}
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        nur({commit}, data){
            return new Promise((resolve, reject) => {
                const token = sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = "Token " + token

                axios({url: 'https://vetprof.herokuapp.com/livestock/LiveStock/', data: data, method: 'POST' })
                    .then(resp => {
                        console.log('NURZHIK',resp.data)
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        },
        login({commit}, user){
            console.log("innnnn",user)
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'https://vetprof.herokuapp.com/login ', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        console.log(resp)
                        // const user = resp.data.user
                        sessionStorage.setItem('token', token);
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = "Token" + token

                            axios.defaults.headers.common['Accept'] = "application/json"
                            // Vue.prototype.$http.defaults.headers.common['Accept'] = "application/json"
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        sessionStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        // printreport1({commit}, report){
        //     console.log("report",report)
        //     return new Promise((resolve, reject) => {
        //
        //         const token = sessionStorage.getItem('token');
        //         axios.defaults.headers.common['Authorization'] = "Token " + token
        //
        //         axios({url: 'http://185.22.65.39:7000/farmer/Farmer/?id='+this.filtername, method: 'GET' })
        //
        //             .then(resp => {
        //                 console.log('getFiltered',resp.data)
        //                 this.getFiltered = resp.data.results
        //                 this.linkPrev = resp.data.links.previous
        //                 this.linkNext = resp.data.links.next
        //                 console.log("ceeewf", this.getFiltered.results.livestocks)
        //                 resolve(resp)
        //
        //
        //             })
        //             .catch(err => {console.log(err)
        //             })
        //     })
        // },

        createVillage({commit}, village){
            return new Promise((resolve, reject) => {



                const token = sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = "Token " + token

                axios({url: 'https://vetprof.herokuapp.com/farmer/Village/', data: village, method: 'POST' })
                    .then(resp => {
                        console.log('IN MAIN',resp.data)
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        },
        createVLivestock({commit}, live){
            return new Promise((resolve, reject) => {



                const token = sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = "Token " + token

                axios({url: 'https://vetprof.herokuapp.com/livestock/LiveStock/', data: live, method: 'POST' })
                    .then(resp => {
                        console.log('LIVESTOOOOOOCK',resp.data)
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        },
        createVaccination({commit}, vac){
            return new Promise((resolve, reject) => {
                const token = sessionStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = "Token " + token

                axios({url: 'https://vetprof.herokuapp.com/vaccination/Medicine/', data: vac, method: 'POST' })
                    .then(resp => {
                        console.log('VACCINATION',resp.data)
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        },

        main({commit}){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log('promise zawel ');
                const token = sessionStorage.getItem('token');

                axios.defaults.headers.common['Authorization'] = "Token " + token
                // axios.defaults.headers.common['Content-Type'] = "application/json"
                // axios.defaults.headers.common['Accept'] = "application/json"

                console.log(axios.defaults.headers, 'headers in get');

                axios({url: 'https://vetprof.herokuapp.com/employee/Department/', method: 'GET' })

                    .then(resp => {
                        console.log('IN MAIN',resp.data)
                        resolve(resp)


                    })
                    .catch(err => {console.log(err)
                    })
            })
        },
        createWorker({commit},inf){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log('workers zawel ');
                const token = sessionStorage.getItem('token');

                axios.defaults.headers.common['Authorization'] = "Token " + token
                // axios.defaults.headers.common['Content-Type'] = "application/json"
                // axios.defaults.headers.common['Accept'] = "application/json"

                console.log(axios.defaults.headers, 'headers in get');

                axios({url: 'https://vetprof.herokuapp.com/employee/Employee/', data: inf, method: 'POST' })

                    .then(resp => {
                        console.log('IN CREATE WORKER',resp)
                        this.$router.push('/mainInput/workers')


                    })
                    .catch(err => {console.log(err)
                    })
            })
        },
        createFarmer({commit},inf){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log('workers zawel ');
                const token = sessionStorage.getItem('token');

                axios.defaults.headers.common['Authorization'] = "Token " + token
                console.log(axios.defaults.headers, 'headers in get');

                axios({url: 'https://vetprof.herokuapp.com/farmer/Farmer/', data: inf, method: 'POST' })

                    .then(resp => {
                        console.log('IN CREATE FARMER',resp)


                    })
                    .catch(err => {console.log(err)
                    })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'https://vetprof.herokuapp.com/register', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        sessionStorage.setItem('token', token)
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        sessionStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout')
                sessionStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})











// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
//
// Vue.use(Vuex)
// // axios.defaults.baseURL = 'http://todo-laravel.test/api'
//
// export const store = new Vuex.Store({
//     state: {
//         token: localStorage.getItem('access_token') || null,
//         filter: 'all',
//         todos: [],
//     },
//     getters: {
//         loggedIn(state) {
//             return state.token !== null
//         },
//         remaining(state) {
//             return state.todos.filter(todo => !todo.completed).length
//         },
//         anyRemaining(state, getters) {
//             return getters.remaining != 0
//         },
//         todosFiltered(state) {
//             if (state.filter == 'all') {
//                 return state.todos
//             } else if (state.filter == 'active') {
//                 return state.todos.filter(todo => !todo.completed)
//             } else if (state.filter == 'completed') {
//                 return state.todos.filter(todo => todo.completed)
//             }
//             return state.todos
//         },
//         showClearCompletedButton(state) {
//             return state.todos.filter(todo => todo.completed).length > 0
//         }
//     },
//     mutations: {
//         // addTodo(state, todo) {
//         //     state.todos.push({
//         //         id: todo.id,
//         //         title: todo.title,
//         //         completed: false,
//         //         editing: false,
//         //     })
//         // },
//         // updateTodo(state, todo) {
//         //     const index = state.todos.findIndex(item => item.id == todo.id)
//         //     state.todos.splice(index, 1, {
//         //         'id': todo.id,
//         //         'title': todo.title,
//         //         'completed': todo.completed,
//         //         'editing': todo.editing,
//         //     })
//         // },
//         // deleteTodo(state, id) {
//         //     const index = state.todos.findIndex(item => item.id == id)
//         //     state.todos.splice(index, 1)
//         // },
//         // checkAll(state, checked) {
//         //     state.todos.forEach(todo => (todo.completed = checked))
//         // },
//         // updateFilter(state, filter) {
//         //     state.filter = filter
//         // },
//         // clearCompleted(state) {
//         //     state.todos = state.todos.filter(todo => !todo.completed)
//         // },
//         // retrieveTodos(state, todos) {
//         //     state.todos = todos
//         // },
//         retrieveToken(state, token) {
//             state.token = token
//         },
//         destroyToken(state) {
//             state.token = null
//         },
//         clearTodos(state) {
//             state.todos = []
//         },
//     },
//     actions: {
//         // clearTodos(context) {
//         //     context.commit('clearTodos')
//         // },
//         register(context, data) {
//             return new Promise((resolve, reject) => {
//                 axios.post('/register', {
//                     name: data.name,
//                     email: data.email,
//                     password: data.password,
//                 })
//                     .then(response => {
//                         resolve(response)
//                     })
//                     .catch(error => {
//                         reject(error)
//                     })
//             })
//         },
//         destroyToken(context) {
//             axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
//
//             if (context.getters.loggedIn) {
//                 return new Promise((resolve, reject) => {
//                     axios.post('/logout')
//                         .then(response => {
//                             localStorage.removeItem('access_token')
//                             context.commit('destroyToken')
//                             resolve(response)
//                             // console.log(response);
//                             // context.commit('addTodo', response.data)
//                         })
//                         .catch(error => {
//                             localStorage.removeItem('access_token')
//                             context.commit('destroyToken')
//                             reject(error)
//                         })
//                 })
//             }
//         },
//         retrieveToken(context, credentials) {
//
//             return new Promise((resolve, reject) => {
//                 axios.post('/login', {
//                     username: credentials.username,
//                     password: credentials.password,
//                 })
//                     .then(response => {
//                         const token = response.data.access_token
//
//                         localStorage.setItem('access_token', token)
//                         context.commit('retrieveToken', token)
//                         resolve(response)
//                         // console.log(response);
//                         // context.commit('addTodo', response.data)
//                     })
//                     .catch(error => {
//                         console.log(error)
//                         reject(error)
//                     })
//             })
//         },
//         // retrieveTodos(context) {
//         //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
//         //
//         //     axios.get('/todos')
//         //         .then(response => {
//         //             context.commit('retrieveTodos', response.data)
//         //         })
//         //         .catch(error => {
//         //             console.log(error)
//         //         })
//         // },
//         // addTodo(context, todo) {
//         //     axios.post('/todos', {
//         //         title: todo.title,
//         //         completed: false,
//         //     })
//         //         .then(response => {
//         //             context.commit('addTodo', response.data)
//         //         })
//         //         .catch(error => {
//         //             console.log(error)
//         //         })
//         // },
//         // updateTodo(context, todo) {
//         //     axios.patch('/todos/' + todo.id, {
//         //         title: todo.title,
//         //         completed: todo.completed,
//         //     })
//         //         .then(response => {
//         //             context.commit('updateTodo', response.data)
//         //         })
//         //         .catch(error => {
//         //             console.log(error)
//         //         })
//         // },
//         // deleteTodo(context, id) {
//         //     axios.delete('/todos/' + id)
//         //         .then(response => {
//         //             context.commit('deleteTodo', id)
//         //         })
//         //         .catch(error => {
//         //             console.log(error)
//         //         })
//         // },
//         // checkAll(context, checked) {
//         //     axios.patch('/todosCheckAll', {
//         //         completed: checked,
//         //     })
//         //         .then(response => {
//         //             context.commit('checkAll', checked)
//         //         })
//         //         .catch(error => {
//         //             console.log(error)
//         //         })
//         // },
//         // updateFilter(context, filter) {
//         //
//         //     context.commit('updateFilter', filter)
//         //
//         // },
//         // clearCompleted(context) {
//         //     const completed = context.state.todos
//         //         .filter(todo => todo.completed)
//         //         .map(todo => todo.id)
//         //
//         //     axios.delete('/todosDeleteCompleted', {
//         //         data: {
//         //             todos: completed
//         //         }
//         //     })
//         //         .then(response => {
//         //             context.commit('clearCompleted')
//         //         })
//         //         .catch(error => {
//         //             console.log(error)
//         //         })
//         // }
//     }
// })
