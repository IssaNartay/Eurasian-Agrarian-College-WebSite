<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <v-footer />
  </div>
</template>

<script>
import vFooter from "./components/layouts/v-footer.vue";

export default {
  name: "App",
  components: { vFooter },
};


</script>

<style>
#app {
  margin: 0;
  padding: 0;
}

</style>
