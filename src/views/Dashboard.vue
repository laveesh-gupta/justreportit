<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link v-for="link in home" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-for="link in dashboard" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>mdi-laptop</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-for="link in register" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-for="link in login" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-for="link in about" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>JustReportIt</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded color="primary" dark class="but" @click="signOut">Sign In/Out</v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <!-- add contents here -->
            <!-- <label>Name:</label>
            <input type="text" v-model="name"/>
            <button @click="submitName()">Add</button>-->

            <div id="reports">
              <h3>Report the reason</h3>
              <br />
              <form @submit.prevent="submitPressed">
                <div class="Type here">
                  <v-text-field
                    label="Filled"
                    single-line
                    filled
                    placeholder="Type here"
                    v-model="report"
                    required
                  ></v-text-field>
                </div>
                <v-btn class="ma-2" outlined color="indigo" type="submit">Submit</v-btn>
              </form>
              <div class="error" v-if="error">{{error.message}}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020 JustAnotherTeam</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "../main"

// import { namesRef } from "../main"
export default {
  data() {
    return {
      // dashboards: "",
      //name: reports,
      drawer: null,
      about: [
        /*{ text: 'Register', route: '/register' },
        { text: 'Home', route: '/' },
        { text: 'Login', route: '/login' },
        { text: 'Secret', route: '/secret' },
        */
        { text: 'About', route: '/about' }
        //{ icon: 'folder', text: 'My Projects', route: '/projects' },
        //{ icon: 'person', text: 'Team', route: '/team' },
      ],
      home: [
        { text: 'Home', route: '/' }
      ],
      register: [
        { text: 'Register', route: '/register' }
      ],
      dashboard: [
        { text: 'Dashboard', route: '/dashboard' }
      ],
      login: [
        { text: 'Login', route: '/login' }
      ],
      // name: 'Laveesh'
      report: null
      
    };
  },
  mounted() {
    // this.getDashboards();
    this.setupFirebase();
          this.$vuetify.theme.dark = true
  },
  methods: {
    // async getDashboards() {
    //   const token = await firebase.auth().currentUser.getIdToken();
    //   let config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   };
    //   this.dashboards = await this.$axios.get(
    //     "http://localhost:8080/",
    //     config
    //   );
    //   this.dashboards = this.dashboards.data;
    // },


    submitPressed(){
      db.collection('reports').add({
        report: this.report
      })
      .then(docRef => {
            console.log('Report added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding report: ', error)
          })
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
    // submitName() {
    //   namesRef.push({names: this.name})
    // }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>