<template>
  <v-app>
    <v-navigation-drawer app
                         fixed
                         permanent
                         :mini-variant="drawer"
                         :mini-variant-width="74"
                         class="drawer_bg"
                         :width="drawerWidth"
                         dark
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
          <v-btn text dark block @click.stop="drawer = !drawer" :ripple="false">
            <v-img :max-width="burger.width" src="./assets/burger.svg"></v-img>
          </v-btn>
        </v-col>
      </v-row>
      <v-list dense dark>
        <v-list-item @click.stop="$vuetify.goTo('#BenefitsScreen', {
          duration: 1000,
          easing: 'easeInOutQuint'
        })">
          Преимущества
        </v-list-item>
        <v-list-item @click.stop="$vuetify.goTo('#ServicesScreen', {
          duration: 1000,
          easing: 'easeInOutQuint'
        })">
          Услуги
        </v-list-item>
        <v-list-item @click.stop="$vuetify.goTo('#PortfolioScreen', {
          duration: 1000,
          easing: 'easeInOutQuint'
        })">
          Портфолио
        </v-list-item>
        <v-list-item @click.stop="$vuetify.goTo('#OurTeamScreen', {
          duration: 1000,
          easing: 'easeInOutQuint'
        })">
          Команда
        </v-list-item>
      </v-list>
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
    },
    drawer: true
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
      if(this.windowWidth <= this.$vuetify.breakpoint.thresholds.xs){
        this.drawerWidth = 48
        this.logo.width = 33
        this.logo.heigth = 45
        this.burger.width = 17
      } else if(this.windowWidth <= this.$vuetify.breakpoint.thresholds.sm) {
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
