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
                        Na parte de baixo da tela, encontramos ícones
                        da <b>barra de navegação</b>.
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
                    <h3 class='text-center text-weight-medium'>
                        O botão em forma de triângulo ou seta serve para
                        voltar para a página ou ação anterior.
                        <img :src='imagem4' height='100%' width='100%'>
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        O botão em forma de círculo, ou as vezes em formato de "casa",
                        serve para voltar para a tela inicial do sistema.
                        <img :src='imagem5' height='100%' width='100%'>
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        O botão em forma de quadrado mostra os aplicativos
                        abertos recentemente.
                        <img :src='imagem6' height='100%' width='100%'>
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Na parte de cima da tela, encontramos uma
                        <p><big class='text-primary'>BARRA DE STATUS</big></p>
                        <img :src='imagem7' height='100%' width='100%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        No lado <big>DIREITO</big> da barra, encontramos informações sobre
                        o horário, bateria, internet e som.
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
      imagem4: require('../assets/back-button.png'),
      imagem5: require('../assets/home-button.png'),
      imagem6: require('../assets/recent-button.png'),
      imagem7: require('../assets/statusbar.png'),
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
