<template>
  <q-layout view="lHh Lpr lFf" class='bg-light-blue-9'>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import {
    openURL
  } from 'quasar';
  
  export default {
    name: 'LayoutDefault',
    data() {
      return {
        leftDrawerOpen: this.$q.platform.is.desktop,
      };
    },
    methods: {
      openURL,
    },
  };
</script>

<style>
  
</style>
