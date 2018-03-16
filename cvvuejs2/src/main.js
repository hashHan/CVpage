import Vue from 'vue'
import VueRouter from 'vue-router';
//import VueResource from 'vue-resource'; use axios
import axios from 'axios'; //if want global

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
//Vue.use(VueResource); use axios
//Vue.http.options.root = 'https://blahblah.firebaseio.com/';

axios.defaults.baseURL = 'https://cvhaeseong.firebaseio.com';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  created() {
    //console.log(this.$store)
    this.$store.dispatch('loadData') // dispatch loading
  },
  render: h => h(App)
})
