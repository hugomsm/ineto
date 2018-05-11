<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

window.screen.orientation.lock('portrait');

/* function feedback() {
  const DF = window.plugins.deviceFeedback;
  DF.haptic(DF.VIRTUAL_KEY);
} */

// this.$root.$on('deviceFeedback', feedback);

export default {
  name: 'App',
};
</script>

<style>
</style>
