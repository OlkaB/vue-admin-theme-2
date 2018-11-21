import Vue from 'vue'
import 'babel-polyfill'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

// Global filters
import "./filters/filters";

//Global components
import GlobalComponents from './plugins/globalComponents';
Vue.use(GlobalComponents);

// plugins
import VueGoogleCharts from 'vue-google-charts' 
Vue.use(VueGoogleCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
