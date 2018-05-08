<template>
  <div>
    <q-collapsible
    group='aulas'
    :class='headerColor'
    icon='explore'
    @show='openedCollapsible'
    @hide='closedCollapsible'
    :label='aulaSelecionada.tituloAula'>
    <div>
      <q-btn class='bg-light-blue-4 text-weight-bolder'>Começar aula!</q-btn>
      <hr>
      <p class='text-weight-bolder'> {{aulaSelecionada.descricao}} </p>
    </div>
  </q-collapsible>
  </div>
</template>

<script>
export default {
  props: ['aulaSelecionada'],
  data() {
    return {
      headerColor: 'bg-light-blue-4 text-weight-bolder text-center',
    };
  },
  methods: {
    openedCollapsible() {
      this.headerColor = 'bg-light-blue-1 text-weight-bolder text-center';
    },
    closedCollapsible() {
      this.headerColor = 'bg-light-blue-4 text-weight-bolder text-center';
    },
  },
};
</script>
