<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

// eslint-disable-next-line
console.log(window.plugins);

window.screen.orientation.lock('portrait');

export default {
  name: 'App',
};
</script>

<style>
</style>
