<template>
  <v-app>
    <v-navigation-drawer app
                         fixed
                         permanent
                         class="drawer_bg"
                         :width="drawerWidth"
                         light
    >
      <v-row>
        <v-col cols="12"  class="text-center">
          <router-link to="/">
            <v-avatar :width="logo.width" :height="logo.heigth" tile>
              <v-img :max-width="logo.width" :max-height="logo.heigth" src="./assets/logo-1.svg"></v-img>
            </v-avatar>
          </router-link>
        </v-col>

        <v-col cols="12"  class="text-center">
          <v-btn text dark block :ripple="false">
            <v-img :max-width="burger.width" src="./assets/burger.svg"></v-img>
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    windowWidth: 0,
    drawerWidth: 156,
    logo: {
      width: 64,
      heigth: 81
    },
    burger: {
      width: 36
    }
  }),
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.drawerWatcher()
    },
    drawerWatcher(){
      if(this.windowWidth <= 767){
        this.drawerWidth = 48
        this.logo.width = 33
        this.logo.heigth = 45
        this.burger.width = 17
      } else if(this.windowWidth >= 768 && this.windowWidth <= 1439) {
        this.drawerWidth = 74
        this.logo.width = 59
        this.logo.heigth = 75
        this.burger.width = 25
      } else {
        this.drawerWidth = 157
        this.logo.width = 64
        this.logo.heigth = 81
        this.burger.width = 36
      }
    }
  },
};
</script>
<style lang="sass">
  .drawer_bg
    background-color: #11181A !important
    border-color: #11181A !important
  .v-application
      background-color: var(--v-background-base) !important
</style>
