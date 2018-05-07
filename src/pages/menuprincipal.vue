<template>
  <q-page padding>

    <q-layout-header reveal="true" v-model="header">
      iNeto
    </q-layout-header>
    
    <q-list>
      <aulaItem v-for="aula in aulas" v-bind:key="aula.idAula" :aula="aula" ></aulaItem>
    </q-list>

  <q-layout-footer v-model="footer">
      <q-btn
      v-back-to-top.animate="{offset: 250, duration: 200}"
      round
      color="primary"
      class="fixed-bottom-right animate-pop"
      style="margin: 0 15px 15px 0"
      >
       <q-icon name="keyboard_arrow_up" />
      </q-btn>
  </q-layout-footer>


    </q-page>
</template>

<script>
import { AulaItem } from "../components/AulaItem.vue";

export default {
  data: function() {
    return {
      header: "iNeto",
      aulas: [
        {
          idAula: 1,
          tituloAula: "Aula 1 - Introdução",
          descricao: "Entenda os motivos de aprender sobre tecnologia"
        },
        {
          idAula: 2,
          tituloAula: "Aula 2 - Conheça seu aparelho",
          descricao: "Conheça as funcionalidades básicas"
        }
      ]
    };
  },
  components:{
    aulaItem: AulaItem
  }
};
</script>

<style>

</style>
