
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
        <v-row justify="space-around">
          <v-col class="text-center">
            <!-- add contents here -->

            <!-- <form onsubmit="{this.handleSubmit}" action>
              <input ref="this.input" type="text" placeholder="enter location" />
              <button
                onclick="{this.handleSubmit}">Send Air Report!</button>
            </form>
            <div className = "displayData">
            <h2>{<a href="https://airnow.gov/aqi/aqi-basics" target ="blank">Air quality index: </a>} {airData.country_aqi}</h2>
                <h3>{`You have ${airData.breezometer_description.toLowerCase()}!`}</h3>
                <h4>{`Main pollutant: ${airData.dominant_pollutant_description}`}</h4>
                <h4>{`Recommendation: ${airData.random_recommendations.health}!`}</h4>

            </div>
            -->
            <v-text-field label="Enter longitude" single-line outlined></v-text-field>
            <v-text-field label="Enter latitude" single-line outlined></v-text-field>
            <div id="App">
              <v-container class="my-5">
                <v-layout row wrap justify-center>
                  <v-flex xs6 md4>
                    <v-btn
                      color="green accent-4"
                      dark
                      large
                      @click="getlocation()"
                      outlined
                    >Get Location by GPS</v-btn>
                  </v-flex>
                </v-layout>
                <br />
                <br />
                <v-layout row wrap justify-center>
                  <v-flex xs6 md4>
                    <v-btn
                      color="green accent-4"
                      dark
                      large
                      @click="getthestatus()"
                      outlined
                    >Get Status</v-btn>
                  </v-flex>
                </v-layout>
                <br />
                <br />
                <v-layout row wrap justify-center my="4">
                  <v-flex xs6 md4>
                    <div>
                      <v-chip large class="green accent-3" outlined>AQI: {{aqi}}</v-chip>
                    </div>
                  </v-flex>
                  <v-flex xs6 md4>
                    <div>
                      <v-chip large class="green accent-3" outlined>Category: {{category}}</v-chip>
                    </div>
                  </v-flex>
                </v-layout>
                <br />
                <div v-for="(value, name, index) in health_recommendations" :key="index">
                  <strong>{{name}}</strong>
                  : {{value}}
                </div>
              </v-container>
              <!-- AQI: {{ aqi }}
    <br>
              CATEGORY: {{ category }}-->
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
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
*/
//import getCords from "./getCords.js";
//import getAirData from "./getAirData.js";
//import store from './Store.js';
import * as firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";
export default {
  props: {
    source: String
    /*state : {
            airData: null
        }
    */
  },

  data() {
    //const { airData } = this.state
    return {
      loggedIn: false,
      drawer: null,
      about: [
        /*{ text: 'Register', route: '/register' },
        { text: 'Home', route: '/' },
        { text: 'Login', route: '/login' },
        { text: 'Secret', route: '/secret' },
        */
        { text: "About", route: "/about" }
        //{ icon: 'folder', text: 'My Projects', route: '/projects' },
        //{ icon: 'person', text: 'Team', route: '/team' },
      ],
      home: [{ text: "Home", route: "/" }],
      register: [{ text: "Register", route: "/register" }],
      dashboard: [{ text: "Dashboard", route: "/dashboard" }],
      login: [{ text: "Login", route: "/login" }],
      aqi: null,
      category: null,
      health_recommendations: null,
      error: "",
      lat: 12.97194,
      lon: 77.59369
    };
  },
  mounted() {
    this.setupFirebase();
    /*store.on('airData', airData => {
            this.setState({ airData })
        });
    */
    this.$vuetify.theme.dark = true;
  },
  methods: {
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
    },
    getthestatus() {
      axios
        .get(
          "https://api.breezometer.com/air-quality/v2/current-conditions?lat=12.97194&lon=77.59369&key=255c750634c243d39c6a891fa5532b51&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information"
        )
        // eslint-disable-next-line no-return-assign
        .then(
          response => (
            // eslint-disable-next-line no-sequences
            (this.aqi = response.data.data.indexes.baqi.aqi),
            (this.category = response.data.data.indexes.baqi.category),
            (this.health_recommendations =
              response.data.data.health_recommendations)
          )
        );
    },
    getlocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
    },
    showPosition: function(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    }
    /*async handleSubmit(e) {
      e.preventDefault();
      let userInput = this.input.value.trim();

      if (userInput.length < 1) {
        return;
      }

      const result = await getCords(userInput);
      if (!result) {
        console.log("no result");
        return;
      }

      const { lat, lng } = result;

      store.airData = await getAirData(lat, lng);
    }
    */
  }
};
</script>
