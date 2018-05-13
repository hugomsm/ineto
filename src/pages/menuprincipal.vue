<template>
<q-layout>
<q-page-container>
  <q-page class='bg-light-blue-9'>
    <q-list no-border>
      <aula-item v-for='aula in aulas'
      :key='aula.idAula'
      :aulaSelecionada='aula'
      class='q-ma-md'>
      </aula-item>
    </q-list>
     <q-page-sticky position="bottom-right">
        <a
          v-back-to-top.animate='{offset: 50, duration: 200}'
          class="animate-pop play-backtotop non-selectable shadow-2"
          v-ripple.mat
        >
          Voltar ao topo
        </a>
      </q-page-sticky>
      </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>

import AulaItem from '../components/AulaItem.vue';

export default {
  data() {
    return {
      header: 'iNeto',
      aulas: [
        {
          idAula: 1,
          tituloAula: 'Aula 1',
          subTitulo: 'Introdução',
          descricao: 'Entenda os motivos de aprender sobre tecnologia',
        },
        {
          idAula: 2,
          tituloAula: 'Aula 2',
          subTitulo: 'Conheça seu aparelho',
          descricao: 'Conheça as funcionalidades básicas',
        },
        {
          idAula: 3,
          tituloAula: 'Aula 3',
          subTitulo: 'Conheça seu aparelho',
          descricao: 'Conheça as funcionalidades básicas',
        },
        {
          idAula: 4,
          tituloAula: 'Aula 4',
          subTitulo: 'Conheça seu aparelho',
          descricao: 'Conheça as funcionalidades básicas',
        },
      ],
    };
  },
  components: {
    aulaItem: AulaItem,
  },
};
</script>

<style lang="stylus">
@import '~variables'
.play-backtotop
  color white
  position fixed
  left 0
  top 80%
  padding 15px
  width 90px
  background-color $secondary
  border-radius 0 15px 15px 0
  &:hover
   color $grey-4
</style>
