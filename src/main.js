import Vue from 'vue'
import 'babel-polyfill'
import './plugins/vuetify'
import router from './router/router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import store from './store'
import './registerServiceWorker'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false;

// Global filters
import "./filters/filters";

//Global components
import GlobalComponents from './plugins/globalComponents';
Vue.use(GlobalComponents);

// plugins
Vue.use(VueGoogleCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
