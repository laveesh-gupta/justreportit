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
  apiKey: "AIzaSyC36dbzd9bk16WzgXCcO5opT8mdvk4HTdE",
    authDomain: "myapp-642e6.firebaseapp.com",
    databaseURL: "https://myapp-642e6.firebaseio.com",
    projectId: "myapp-642e6",
    storageBucket: "myapp-642e6.appspot.com",
    messagingSenderId: "398228149616",
    appId: "1:398228149616:web:35889667efc0eb6e4d6bb5"
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