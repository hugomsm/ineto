<template>
<q-layout>
    <q-layout-header>
      iNeto
    </q-layout-header>

<q-page-container>
  <q-page>
    <q-list>
      <aulaItem v-for='aula in aulas' v-bind:key='aula.idAula' :aulaSelecionada='aula'></aulaItem>
    </q-list>

      <q-btn v-back-to-top.animate='{offset: 250, duration: 200}' round color='red'
      class='fixed-bottom-right animate-pop'
      style='margin: 0 15px 15px 0'
      >
       <q-icon name='keyboard_arrow_up' />
      </q-btn>
      </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import AulaItem from '../components/AulaItem.vue';

export default {
  data: () => ({
    return: {
      header: 'iNeto',
      aulas: [
        {
          idAula: 1,
          tituloAula: 'Aula 1 - Introdução',
          descricao: 'Entenda os motivos de aprender sobre tecnologia',
        },
        {
          idAula: 2,
          tituloAula: 'Aula 2 - Conheça seu aparelho',
          descricao: 'Conheça as funcionalidades básicas',
        },
      ],
    },
  }),
  components: {
    aulaItem: AulaItem,
  },
};
</script>
