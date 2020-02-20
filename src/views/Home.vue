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
          <v-col class="text-center">
            <!-- add contents here -->
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
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
*/
export default {
    props: {
      source: String,
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
    }
  }
  }
</script>
