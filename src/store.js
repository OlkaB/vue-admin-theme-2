import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        app: {
            pageLoaderIsVisible: false,
            leftNavBarIsVisible: true
        },
        endpoints: {
          userdata: "https://api.myjson.com/bins/9rtp2.json"
        },
        userdata: {
            username: '',
            name: '',
            surname: '',
            role: 'admin',
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
        // passing endpoint name arg to getter
        endpoint: (state) => (endpointName) => {
            return state.endpoints[endpointName];
        },
        appLoaderVisibility: state => {
            return state.app.pageLoaderIsVisible;
        },
        leftNavBarVisibility: state => {
            return state.app.leftNavBarIsVisible;
        },
    },
    mutations: {
        setUser: (state, userData) => {
            state.userdata.username = userData.username;
            state.userdata.name = userData.name;
            state.userdata.surname = userData.surname;
            state.userdata.role = userData.role;
        },
        appLoaderVisibility: (state, isVisible) => {
            state.app.pageLoaderIsVisible = isVisible;
        },
        leftNavBarVisibility: (state, isVisible) => {
            state.app.leftNavBarIsVisible = isVisible;
        }
    },
    actions: {}
})
