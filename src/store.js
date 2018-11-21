import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userdata: {
            username: 'johnDoe',
            name: 'John',
            surname: 'Doe',
            role: ''
        }
    },
    getters: {
        userName: state => {
            return state.userdata.username;
        },
        userRole: state => {
            return state.userdata.role;
        },
        userFullName: state => {
            return state.userdata.name + ' ' + state.userdata.surname;
        },
    },
    mutations: {},
    actions: {}
})
