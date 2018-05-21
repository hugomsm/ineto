<template>
    <q-layout>
        <q-page-container>
            <q-page class='bg-light-blue-9'>
                <carousel-controller>
                    <q-carousel-slide class='bg-white'>
                        <h2 class='text-center text-weight-medium'>
                            Seu aparelho possui algumas funções além do que aparece em sua tela.
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
                            Dois botões seguidos, ou as vezes um único botão mais longo, é o controle de volume.
                            <img :src='imagem3' height='80%' width='80%'>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            Embaixo ou na lateral do aparelho, você deve encontrar um buraco retangular
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
                            Existe também um buraco em forma de círculo na parte de cima ou de baixo do aparelho.
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
                            Geralmente os aparelhos possuem câmeras. Uma na parte de trás...
                            <img :src='imagem8' height='80%' width='80%'>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            E outra na parte da frente, chamada câmera frontal.
                            <img :src='imagem9' height='100%' width='100%'>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            Existe uma bateria que fica na parte de trás do aparelho, fechada pela carcaça.
                            <img :src='imagem10' height='80%' width='80%'>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h3><big class='text-primary text-center'>Exercícios!</big>
                            <p>Marque qual alternativa corresponde à função do recurso na imagem</p>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white text-center'>
                        <h3>
                            <p>Se estiver certa, a opção ficará <big class='text-green'>VERDE</big>, se estiver errado, a opção ficará <big class='text-red'>VERMELHA</big>. Continue tentando até acertar!</p>
                        </h3>
                    </q-carousel-slide>
                    <neto-quiz :opcoes='opcoes1' :imagem='imagem2' :respostaCerta='respostaCerta1'></neto-quiz>
                    <neto-quiz :opcoes='opcoes2' :imagem='imagem4' :respostaCerta='respostaCerta2'></neto-quiz>
                    <neto-quiz :opcoes='opcoes3' :imagem='imagem9' :respostaCerta='respostaCerta3'></neto-quiz>
                </carousel-controller>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    import CarouselController from '../components/CarouselController.vue';
    import NetoQuiz from '../components/NetoQuiz.vue';
    
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
                opcoes1: [{
                        id: 1,
                        resposta: 'Aumentar volume',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Câmera frontal',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 3,
                        resposta: 'Ligar tela',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 4,
                        resposta: 'Diminuir volume',
                        cor: 'light-blue-3',
                    }
                ],
                opcoes2: [{
                        id: 1,
                        resposta: 'Ligar fones',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Aumentar volume',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 3,
                        resposta: 'Desligar tela',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 4,
                        resposta: 'Carregar celular',
                        cor: 'light-blue-3',
                    }
                ],
                opcoes3: [{
                        id: 1,
                        resposta: 'Ver bateria',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Câmera frontal',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 3,
                        resposta: 'Virar tela',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 4,
                        resposta: 'Carregar celular',
                        cor: 'light-blue-3',
                    }
                ],
                respostaCerta1: 'Ligar tela',
                respostaCerta2: 'Carregar celular',
                respostaCerta3: 'Câmera frontal',
            };
        },
        methods: {
            navigateToHome() {
                this.$router.push('/');
            },
        },
        components: {
            carouselController: CarouselController,
            netoQuiz: NetoQuiz,
        },
    };
</script>

<style>
    .q-alert-side, .q-alert-content {
    padding: 12px;
    font-size: 25px;
    word-break: break-word;
}
</style>
