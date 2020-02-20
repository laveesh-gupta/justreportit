<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
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
            <v-icon>mdi-contact-mail</v-icon>
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

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Our app</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12"
            sm="8"
            md="4">
            <!-- add contents here -->
            <div>
                <h3>Login</h3>
                <form @submit.prevent="pressed">
                    <div class="login">
                        <input type="text" placeholder="login" v-model="email" />
                    </div>
                    <div class="password">
                        <input type="password" placeholder="password" v-model="password" />
                    </div>
                    <button>Login</button>
                </form>
                <div class="error" v-if="error">{{error.message}}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
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
      ]
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "dashboard" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  },
  props: {
      source: String,
  },
};

</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
</style>