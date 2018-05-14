<template>
  <div class='fixed-bottom q-ml-md q-mb-md'>
            <q-btn
            size='xl'
            color='red'
            push
            @click='previousSlide'>
                Anterior
            </q-btn>
            <q-btn
            size='xl'
            color='green'
            push
            @click='nextSlide'>
                Próximo
            </q-btn>
            <q-btn
            class='text-black'
            size='xl'
            color='light-blue-1'
            push
            @click='navigateToHome'
            >
                Voltar ao início
            </q-btn>
    </div>
</template>

<script>
export default {
  props: ['relativeSlide'],
  data() {
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    nextSlide() {
      this.relativeSlide = this.relativeSlide + 1;
    },
    previousSlide() {
      this.relativeSlide = this.relativeSlide - 1;
    },
  },
};
</script>
