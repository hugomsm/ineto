<template>
    <q-layout>
        <q-page-container>
            <q-page class='bg-light-blue-9'>
                <carousel-controller>
                    <q-carousel-slide class='bg-white'>
                        <h3 class='text-center text-weight-medium'>
                            Vamos falar sobre
                            <big class='text-primary'>DIGITAÇÃO</big>.
                            <p>Vamos entender como isso funciona.</p>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h3 class='text-center text-weight-medium'>
                            A digitação é feita através do teclado:
                            <img :src='imagem1' height='80%' width='100%'>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            O teclado possui todas as <span class='text-primary'>letras</span>,
                            <span class='text-green'>números</span> e <span class='text-red'>
                                símbolos</span> necessários
                            para digitação.
                            <img :src='imagem2' height='80%' width='80%'>
                        </h4>
                    </q-carousel-slide>
                    <neto-quiz :opcoes='opcoes1' :imagem='altIconsAndroid[2].imagem' :respostaCerta='respostaCerta1'></neto-quiz>
                    <neto-quiz :opcoes='opcoes2' :imagem='altIconsAndroid[4].imagem' :respostaCerta='respostaCerta2'></neto-quiz>
                    <neto-quiz :opcoes='opcoes3' :imagem="require('../assets/baticon.png')" :respostaCerta='respostaCerta3'></neto-quiz>
                    <neto-quiz :opcoes='opcoesVF1' :respostaCerta='"Falso"' :texto='"Os ícones são sempre iguais em todos os aparelhos"'></neto-quiz>
                    <neto-quiz :opcoes='opcoesVF2' :respostaCerta='"Falso"' :texto='"A barra na parte inferior da tela se chama Barra de Status"'></neto-quiz>
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
                imagem1: require('../assets/tecladoandroid.jpg'),
                imagem2: require('../assets/datilografia.png'),
                imagem3: require('../assets/default-navbar.jpg'),
                imagem4: require('../assets/back-button.png'),
                imagem5: require('../assets/home-button.png'),
                imagem6: require('../assets/recent-button.png'),
                imagem7: require('../assets/statusbar.png'),
                imagem8: require('../assets/appIcons.png'),
                imagem9: require('../assets/semioticaicones.png'),
                crudIconsAndroid: [{
                        id: 0,
                        imagem: require('../assets/done.jpg'),
                        descricao: 'Concluir',
                    },
                    {
                        id: 1,
                        imagem: require('../assets/close.jpg'),
                        descricao: 'Fechar',
                    },
                    {
                        id: 2,
                        imagem: require('../assets/add.jpg'),
                        descricao: 'Adicionar',
                    },
                    {
                        id: 3,
                        imagem: require('../assets/delete.jpg'),
                        descricao: 'Deletar',
                    },
                    {
                        id: 4,
                        imagem: require('../assets/edit.jpg'),
                        descricao: 'Editar'
                    },
                ],
                altIconsAndroid: [{
                        id: 0,
                        imagem: require('../assets/dictation.jpg'),
                        descricao: 'Usar a voz',
                    },
                    {
                        id: 1,
                        imagem: require('../assets/share.jpg'),
                        descricao: 'Compartilhar',
                    },
                    {
                        id: 2,
                        imagem: require('../assets/config.jpg'),
                        descricao: 'Configurar',
                    },
                    {
                        id: 3,
                        imagem: require('../assets/options.jpg'),
                        descricao: 'Mais opções',
                    },
                    {
                        id: 4,
                        imagem: require('../assets/search.jpg'),
                        descricao: 'Pesquisar'
                    },
                ],
                statusBarAndroid: [{
                        id: 0,
                        imagem: require('../assets/vibra.png'),
                        descricao: 'Perfil de som'
                    },
                    {
                        id: 1,
                        imagem: require('../assets/wifi.png'),
                        descricao: 'Sinal de Wi-Fi (internet)'
                    },
                    {
                        id: 2,
                        imagem: require('../assets/sinal.png'),
                        descricao: 'Sinal de rede telefônica'
                    },
                    {
                        id: 3,
                        imagem: require('../assets/bateria.png'),
                        descricao: 'Nível de bateria'
                    },
                    {
                        id: 4,
                        imagem: require('../assets/horario.png'),
                        descricao: 'Horário'
                    },
                ],
                opcoes1: [{
                        id: 1,
                        resposta: 'Editar',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Fechar',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 3,
                        resposta: 'Wi-fi',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 4,
                        resposta: 'Configurar',
                        cor: 'light-blue-3',
                    }
                ],
                opcoes2: [{
                        id: 1,
                        resposta: 'Adicionar',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Bateria',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 3,
                        resposta: 'Pesquisar',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 4,
                        resposta: 'Deletar',
                        cor: 'light-blue-3',
                    }
                ],
                opcoes3: [{
                        id: 1,
                        resposta: 'Nível de bateria',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Sinal de rede',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 3,
                        resposta: 'Usar a voz',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 4,
                        resposta: 'Perfil de som',
                        cor: 'light-blue-3',
                    }
                ],
                opcoesVF1: [{
                        id: 1,
                        resposta: 'Verdadeiro',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Falso',
                        cor: 'light-blue-3',
                    },
                ],
                opcoesVF2: [{
                        id: 1,
                        resposta: 'Verdadeiro',
                        cor: 'light-blue-3',
                    },
                    {
                        id: 2,
                        resposta: 'Falso',
                        cor: 'light-blue-3',
                    },
                ],
                respostaCerta1: 'Configurar',
                respostaCerta2: 'Pesquisar',
                respostaCerta3: 'Nível de bateria',
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
    .q-alert-side,
    .q-alert-content {
        padding: 12px;
        font-size: 25px;
        word-break: break-word;
    }
    
    .q-carousel-slide {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        margin: 0;
        padding: 3px;
    }
</style>
