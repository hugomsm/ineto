<template>
  <q-layout>
    <q-page-container >
        <q-page class='bg-light-blue-9'>
            <q-carousel class="text-black q-ma-md bg-white" v-model="slide">
                <q-carousel-slide class="bg-white full-height">
                    <h2 class='text-center text-weight-medium'>
                        Bem vindo ao iNeto! Clique em Próximo para avançar.
                    </h2>
                </q-carousel-slide>
                <q-carousel-slide class="bg-secondary">
                    Slide 2
                </q-carousel-slide>
                <q-carousel-slide class="bg-tertiary">
                    Slide 3
                </q-carousel-slide>
            </q-carousel>
            <!-- <div class='fixed-bottom q-ml-md q-mb-md'>
            <q-btn
            size='xl'
            color='red'
            push
            @click='slide = slide - 1'>
                Anterior
            </q-btn>
            <q-btn
            size='xl'
            color='green'
            push
            @click='slide = slide + 1'>
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
    </div> -->
            <carousel-controller :relativeSlide='slide'></carousel-controller>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>

import CarouselController from '../components/CarouselController.vue';

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
  components: {
    carouselController: CarouselController,
  },
};
</script>

<style>
    .q-carousel{
        position: fixed;
        height: 65%;
    }
</style>

