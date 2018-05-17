<template>
  <q-layout>
    <q-page-container>
        <q-page class='bg-light-blue-9'>
            <carousel-controller>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        A tecnologia é para todos e
                        deve estar acessível para todos,
                        não importa quem.
                        <img :src='imagem1' class='responsive'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Você irá aprender
                        <small class='text-blue'>AOS POUCOS.</small>
                        Não se preocupe em saber
                        <small class='text-red'>TODOS</small>
                       os detalhes ou tudo de uma vez.
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Seja curioso! Não tenha medo de 'fuçar'
                        e perguntar a outros o que não souber.
                        <img class='absolute-bottom'
                        :src='imagem2' height='30%' width='30%'>
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Não desista e não tenha pressa, o aparelho não irá fugir.
                    </h3>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <img :src='imagem3' height='30%' width='30%'
                    class='text-center no-padding'>
                    <img :src='imagem3' height='30%' width='30%'
                    class='text-center no-padding'>
                    <img :src='imagem3' height='30%' width='30%'
                    class='text-center no-padding'>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Lembre-se que a
                        <big class='text-red'>APARÊNCIA</big>
                        das funções podem mudar em cada aparelho,
                        mas continuarão fazendo a mesma coisa
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Refaça as aulas se necessário!
                       <div class='q-display-1 text-primary'>Pratique</div> os exercícios das aulas.
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h2 class='text-center text-weight-medium text-primary'>
                        Bons estudos!
                        <img :src='imagem4' height='100%' width='100%'>
                    </h2>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                        <q-btn
                        class='text-black absolute-center'
                        size='xl'
                        color='light-blue-3'
                        @click='navigateToHome'
                        >
                            Finalizar aula
                        </q-btn>
                </q-carousel-slide>
            </carousel-controller>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import CarouselController from '../components/CarouselController.vue';

export default {
  data() {
    return {
      /* eslint-disable global-require */
      imagem1: require('../assets/idososusandocelular.png'),
      imagem2: require('../assets/pensando.gif'),
      imagem3: require('../assets/celularcorrendo.jpg'),
      imagem4: require('../assets/idosocomputador.jpg'),
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
.responsive {
  height: 75%;
  width: 75%;
}
.no-padding {
  margin-left: -4px;
}
</style>
