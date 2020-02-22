<template>
  <div class="home">
    <first-screen />
    <benefits-screen />
    <services-screen />
    <portfolio-screen />
    <our-team-screen />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstScreen from "../components/FirstScreen";
import BenefitsScreen from "../components/BenefitsScreen";
import ServicesScreen from "../components/ServicesScreen";
import PortfolioScreen from "../components/PortfolioScreen";
import OurTeamScreen from "../components/OurTeamScreen";
export default {
  name: 'Home',
  data: () => ({
  }),
  components: {
    FirstScreen,
    BenefitsScreen,
    ServicesScreen,
    PortfolioScreen,
    OurTeamScreen,
  },
  methods: {
    onSlideChangeStart (currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd (currentPage) {
      console.log('onSlideChangeEnd', currentPage);
    }
  }
}
</script>
<style lang="sass">
  .section
    height: 100vh
</style>
