<template>
  <q-layout>
    <q-page-container>
        <q-page class='bg-light-blue-9'>
            <carousel-controller>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Em sua tela, você pode encontrar algumas figuras, chamadas
                        <p><big class='text-primary'>ÍCONES</big>.</p>
                        <p>Vamos entender o que elas significam.</p>
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Na parte de baixo do aparelho, encontramos <b>ícones</b>
                        que podem controlar algumas coisas da tela.
                        <img :src='imagem1' height='100%' width='100%'>
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Eles podem ter desenhos ou posições diferentes,
                        mas apesar de mudarem de aparência, a função é a mesma.
                        <img :src='imagem2' height='80%' width='80%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Os mais comuns são parecidos com os mostrados abaixo
                        <img :src='imagem3' height='100%' width='100%'>
                    </h3>
                </q-carousel-slide>
               <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Embaixo ou na lateral do aparelho,
                        você deve encontrar um buraco retangular
                        <img :src='imagem4' height='80%' width='80%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Ele serve para ligar o carregador do celular.
                        <img :src='imagem5' height='100%' width='100%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Existe também um buraco em forma de círculo
                         na parte de cima ou de baixo do aparelho.
                        <img :src='imagem6' height='80%' width='80%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Esse buraco serve para conectar os fones de ouvido.
                        <img :src='imagem7' height='100%' width='100%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Geralmente os aparelhos possuem câmeras.
                        Uma na parte de trás...
                        <img :src='imagem8' height='80%' width='80%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        E outra na parte da frente,
                        chamada câmera frontal.
                        <img :src='imagem9' height='100%' width='100%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Existe uma bateria que fica na parte de trás do aparelho,
                        fechada pela carcaça.
                        <img :src='imagem10' height='80%' width='80%'>
                    </h4>
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
      imagem1: require('../assets/barra-navegacao.png'),
      imagem2: require('../assets/Nav-bar-collage.jpg'),
      imagem3: require('../assets/default-navbar.jpg'),
      imagem4: require('../assets/entradausb.jpg'),
      imagem5: require('../assets/celcarregando.jpg'),
      imagem6: require('../assets/entradap2.jpg'),
      imagem7: require('../assets/celular-com-fone-de-ouvido.jpg'),
      imagem8: require('../assets/cameratraseira.jpg'),
      imagem9: require('../assets/camerafrontal.jpg'),
      imagem10: require('../assets/bateriacelular.jpg'),
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
