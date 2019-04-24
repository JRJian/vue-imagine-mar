<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<!-- https://www.mariodragicevic.com/ -->
<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: Empirica Headline Regular Roman Extra-light;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
body {
  background-color: #252423;
}
</style>
