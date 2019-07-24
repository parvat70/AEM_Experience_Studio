<template>
  <div id="app">
    <!--<router-view/>-->

    <!-- <router-view /> -->
    <ListOfComponent />
  </div>
</template>

<style lang="scss">
@import "./styles/main";
</style>
<script>
import ListOfComponent from "@/components/organisms/ListOfComponent.vue";
export default {
  name: "App",
  components: {
    ListOfComponent
  }
};
</script>
