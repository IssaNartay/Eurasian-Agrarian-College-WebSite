import Vue from 'vue';
import App from './App.vue';
import Vuelidate from "vuelidate";
import router from "./router/router";
import store from "./store/store";
import firebase from 'firebase/app';
import './assets/styles/style.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

Vue.use(Vuelidate);

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyBMZXiBVqF79h8IUTfCezwnJLJy3r3alOA",
  authDomain: "eac-auth.firebaseapp.com",
  projectId: "eac-auth",
  storageBucket: "eac-auth.appspot.com",
  messagingSenderId: "1039688560794",
  appId: "1:1039688560794:web:5fc2342a567c6381a7af23",
  measurementId: "G-QXL0S6HHWP"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
  // mounted() {
  //   AOS.init({
  //     duration: 1100
  //   })
  // },
}).$mount('#app')
