<template>
  <div class="home">
    <first-screen />
    <benefits-screen />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstScreen from "../components/FirstScreen";
import BenefitsScreen from "../components/BenefitsScreen";
export default {
  name: 'Home',
  data: () => ({
  }),
  components: {
    FirstScreen,
    BenefitsScreen,
  },
}
</script>
<style lang="sass">
  .section
    height: 100vh
</style>
