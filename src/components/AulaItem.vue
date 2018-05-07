<template>
  <div>
    <q-collapsible icon='explore' label='First'>
    <div>
      {{aulaSelecionada.descricao}}
    </div>
  </q-collapsible>
  </div>
</template>

<script>
export default {
  props: ['aulaSelecionada'],
};
</script>
