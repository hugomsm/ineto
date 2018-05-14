<template>
  <div>
    <q-collapsible
    group='aulas'
    class='bg-light-blue-4 text-weight-bolder q-title text-center q-pa-xs shadow-6'
    header-class='q-title'
    image='../assets/aula.png'
    sparse
    :label='aulaSelecionada.tituloAula'
    :sublabel='aulaSelecionada.subTitulo'
    >
    <q-card class='bg-light-blue-1 q-pa-lg shadow-6'>
      <q-btn
      class='bg-light-blue-4 text-weight-bolder shadow-6 q-body-1 q-mb-xs'
      size=lg
      @click='navigateToAula'
      >
        Começar aula!
      </q-btn>
      <hr>
      <p class='text-weight-bolder'> {{aulaSelecionada.descricao}} </p>
    </q-card>
  </q-collapsible>
  </div>
</template>

<script>

export default {
  props: ['aulaSelecionada'],
  methods: {
    feedbackClick() {
      const DF = window.plugins.deviceFeedback;
      DF.haptic(DF.VIRTUAL_KEY);
    },
    navigateToAula() {
      const id = this.aulaSelecionada.idAula.toString();
      const url = `aula${id}`;
      this.$router.push(`${url}`);
    },
  },
};
</script>

<style>
  .q-item-sublabel{
    color:black;
    text-align: center;
  }

  .q-item-label{
    color:black;
    text-align: center;
  }
</style>
