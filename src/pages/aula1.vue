<template>
  <q-layout>
    <q-page-container>
        <q-page class='bg-light-blue-9'>
            <carousel-controller>
                <q-carousel-slide class="bg-white">
                    <h2 class='text-center text-weight-medium'>
                        Bem vindo ao iNeto!
                        <p>Aperte no botão </p>
                        <p class='text-green'>
                        Próximo (abaixo)</p>  para continuar a aula.
                    </h2>
                </q-carousel-slide>
                <q-carousel-slide class="bg-white">
                    <h2 class='text-center text-weight-medium'>
                        <p>Aperte no botão</p>
                        <p class='text-red'>
                        Anterior (abaixo)
                        </p>
                        para voltar para a parte anterior.
                    </h2>
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
