<template>
  <div class="home">
    <ListOfComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ListOfComponent from "@/components/organisms/ListOfComponent.vue";
export default {
  name: "home",
  components: {
    ListOfComponent
  }
};
</script>
