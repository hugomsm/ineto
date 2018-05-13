<template>
<q-layout>
    <q-page-container>
        <q-page>
            <aula-container></aula-container>
        </q-page>
    </q-page-container>
</q-layout>
</template>

<style>
</style>

<script>

import AulaContainer from '../components/AulaContainer.vue';

export default {
  aulaContainer: AulaContainer,
};
</script>
