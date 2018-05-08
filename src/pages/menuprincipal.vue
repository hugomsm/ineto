<template>
<q-layout>
    <q-layout-header class='q-headline text-center'>
      iNeto
    </q-layout-header>

<q-page-container>
  <q-page class='bg-light-blue-9'>
    <q-list>
      <aula-item v-for='aula in aulas'
      :key='aula.idAula'
      :aulaSelecionada='aula'
      class='q-pa-sm'>
      </aula-item>
    </q-list>
      <q-btn v-back-to-top.animate='{offset: 250, duration: 200}' round color='red'
      class='fixed-bottom-right animate-pop' size='xl'
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
  data() {
    return {
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
    };
  },
  components: {
    aulaItem: AulaItem,
  },
};
</script>
