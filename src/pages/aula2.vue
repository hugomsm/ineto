<template>
  <q-layout>
    <q-page-container>
        <q-page class='bg-light-blue-9'>
            <carousel-controller>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        Bem vindo(a) à Aula 2!
                        <p>Aperte no botão </p>
                        <p class='text-green'>
                        Próximo (abaixo)</p>  para continuar a aula.
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h3 class='text-center text-weight-medium'>
                        <p>Se precisar, aperte no botão</p>
                        <p class='text-red'>
                        Anterior (abaixo)
                        </p>
                        para voltar para a parte anterior.
                    </h3>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h2 class='text-center text-weight-medium'>
                        Seu aparelho possui algumas funções além do que aparece
                        em sua tela.
                    </h2>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Ao lado ou em cima do aparelho, você pode encontrar alguns botões.
                        <img :src='imagem1' height='100%' width='100%'>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        O botão sozinho serve para ligar ou desligar o aparelho.
                        <p><img :src='imagem2' height='80%' width='80%'></p>
                    </h4>
                </q-carousel-slide>
                <q-carousel-slide class='bg-white'>
                    <h4 class='text-center text-weight-medium'>
                        Dois botões seguidos, ou as vezes um único botão mais longo,
                        é o controle de volume.
                        <img :src='imagem3' height='80%' width='80%'>
                    </h4>
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
      imagem1: require('../assets/lateralcel.jpg'),
      imagem2: require('../assets/powerbutton.jpg'),
      imagem3: require('../assets/volumebutton.jpg'),
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
