
<template>
<div>
  <Navbar />
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
// import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
// import TopBar from "./components/TopBar.vue";
export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
