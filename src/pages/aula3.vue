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
                            Na parte de baixo da tela, encontramos ícones da <b>barra de navegação</b>.
                            <img :src='imagem1' height='100%' width='100%'>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            Eles podem ter desenhos ou posições diferentes, mas apesar de mudarem de aparência, a função é a mesma.
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
                            O botão em forma de triângulo ou seta serve para voltar para a página ou ação anterior.
                            <img :src='imagem4' height='100%' width='100%'>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h3 class='text-center text-weight-medium'>
                            O botão em forma de círculo, ou as vezes em formato de "casa", serve para voltar para a tela inicial do sistema.
                            <img :src='imagem5' height='100%' width='100%'>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h3 class='text-center text-weight-medium'>
                            O botão em forma de quadrado mostra os aplicativos abertos recentemente.
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
                            Na DIREITA da barra, encontramos os ícones:
                            <q-list highlight striped-odd dense>
                                <q-item v-for='item in statusBarAndroid' :key='item.id'>
                                    <q-item-side>
                                        <q-item-tile avatar>
                                            <img :src='item.imagem'>
                                        </q-item-tile>
                                    </q-item-side>
                                    {{ item.descricao }}
                                </q-item>
                            </q-list>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            Na ESQUERDA da barra, encontramos os ícones de aplicativos,
                            e mudam de acordo com o que tiver instalado em seu aparelho.
                            <img :src='imagem8' height='100%' width='100%'>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            Outros ícones comuns são:
                            <q-list highlight striped-odd dense>
                                <q-item v-for='item in crudIconsAndroid' :key='item.id'>
                                    <q-item-side>
                                        <q-item-tile avatar>
                                            <img :src='item.imagem'>
                                        </q-item-tile>
                                    </q-item-side>
                                    {{ item.descricao }}
                                </q-item>
                            </q-list>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            Mais ícones comuns:
                            <q-list highlight striped-odd dense>
                                <q-item v-for='item in altIconsAndroid' :key='item.id'>
                                    <q-item-side>
                                        <q-item-tile avatar>
                                            <img :src='item.imagem'>
                                        </q-item-tile>
                                    </q-item-side>
                                    {{ item.descricao }}
                                </q-item>
                            </q-list>
                        </h4>
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
                imagem8: require('../assets/appIcons.png'),
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
                ]
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
