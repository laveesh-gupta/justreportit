import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";
import vuetify from './plugins/vuetify';
import 'firestore'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRz6EKxLotinJ7RF2an944FimlpQY6IZQ",
    authDomain: "web-app-1a457.firebaseapp.com",
    databaseURL: "https://web-app-1a457.firebaseio.com",
    projectId: "web-app-1a457",
    storageBucket: "web-app-1a457.appspot.com",
    messagingSenderId: "337132330862",
    appId: "1:337132330862:web:a7c1f27b73ff2a76cc6b7f"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});

// export const db = app.database();
// export const namesRef = db.ref('names');

export default app.firestore();

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");