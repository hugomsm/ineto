<template>
<div style="display: grid; grid-template-rows: 1fr auto; height: calc(100vh - 48px);">
  <q-carousel class="text-black q-ma-md bg-white" v-model='slide'>
    <slot></slot>
  </q-carousel>
  <!-- <div class='q-ml-md q-mb-md'> -->
  <div class='row gutter-sm q-pa-sm'>
    <div class='col-6'>
            <q-btn
           class='full-width'
           size='xl'
           color='red'
           push
           @click='slide = slide - 1'>
                Anterior
          </q-btn>
    </div>
    <div class='col-6'>
            <q-btn
           class='full-width'
           size='xl'
           color='green'
           push
           @click='slide = slide + 1'>
                Próximo
            </q-btn>
    </div>
    <div class='col-12'>
            <q-btn
           class='text-black full-width'
           size='xl'
           color='light-blue-1'
           push
           @click='navigateToHome'
           >
                Voltar ao início
            </q-btn>
    </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
</style>
