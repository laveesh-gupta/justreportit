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
<br />
    <v-card
    max-width="400"
    class="mx-auto my-12"
  >
    <v-list-item>
     
      <v-list-item-content>
        <v-list-item-title class="headline">Laveesh Gupta</v-list-item-title>
        <v-list-item-subtitle>Co-founder</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img src="https://avatars0.githubusercontent.com/u/44422144?s=400&v=4"></v-img>

    <v-card-text>
        Currently a student at RIT. Back-end web developer.
    </v-card-text>

    <v-card-actions>
     
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-list-item>
     
      <v-list-item-content>
        <v-list-item-title class="headline">Shreya Modi and Nikunj Das Kasat</v-list-item-title>
        <v-list-item-subtitle>Co-founders</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/p960x960/75419046_2509983552418428_5687236856882659328_o.jpg?_nc_cat=101&_nc_ohc=XBmZ2GtiP9oAX9lhHI3&_nc_ht=scontent-maa2-1.xx&_nc_tp=6&oh=f5ee00b6f147070ca1d6a39e55d3f9ae&oe=5EF78793" height="350"></v-img>

    <v-card-text>
        Currently a student at RIT. Front-end web developer.
    </v-card-text>

    <v-card-actions>
     
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-list-item>
     
      <v-list-item-content>
        <v-list-item-title class="headline">Muskan Gupta</v-list-item-title>
        <v-list-item-subtitle>Co-founder</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/73262108_1628091597327993_6942370946682454016_n.jpg?_nc_cat=103&_nc_ohc=ZvnuMd32dXcAX8fAtJu&_nc_ht=scontent-maa2-2.xx&oh=4ebb46c251f3e41ff00a16b25e38db00&oe=5EC4C3A3"></v-img>

    <v-card-text>
        Currently a student at RIT. Front end web developer.
    </v-card-text>

    <v-card-actions>
     
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  props: {
    source: String
  },
  data() {
    return {
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
      login: [{ text: "Login", route: "/login" }]
    };
  },
  mounted() {
    this.setupFirebase();
          this.$vuetify.theme.dark = true
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
    }
  }
};
</script>
