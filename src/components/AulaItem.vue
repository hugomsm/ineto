<template>
  <div>
    <q-collapsible icon="explore" label="First">
    <div>
      {{aula.descricao}}
    </div>
  </q-collapsible>
  </div>
</template>

<script>
export default {
  props: ['aula'],
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
</style>
