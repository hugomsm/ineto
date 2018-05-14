<template>
  <q-layout>
    <q-page-container >
        <q-page class='bg-light-blue-9'>
            <carousel-controller>
                <q-carousel-slide class="bg-white full-height">
                    <h2 class='text-center text-weight-medium'>
                        Bem vindo ao iNeto! Clique no botão
                        <p class='text-green'>
                        Próximo</p> (abaixo) para continuar a aula.
                    </h2>
                </q-carousel-slide>
                <q-carousel-slide class="bg-secondary">
                    Slide 2
                </q-carousel-slide>
                <q-carousel-slide class="bg-tertiary">
                    Slide 3
                </q-carousel-slide>
            </carousel-controller>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>

</style>

<script>

import CarouselController from '../components/CarouselController.vue';

export default {
  components: {
    carouselController: CarouselController,
  },
};
</script>

<style>
</style>

