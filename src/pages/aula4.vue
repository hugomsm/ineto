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
                                                                        símbolos</span> necessários para digitação.
                            <img :src='imagem2' height='80%' width='80%'>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white' v-for='item in opcoesTeclado' :key='item.id'>
                        <h4 class='text-center text-weight-medium'>
                            {{item.descricao}}
                        </h4>
                        <p class='text-center'><img :src='item.imagem' height='70%' width='70%'></p>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <br>
                        <q-input class='q-title text-center' v-model='text' float-label="APERTE AQUI PARA COMEÇAR" placeholder="DIGITE O QUE QUISER" clearable align='center'></q-input>
                        <h3 class='text-center text-weight-medium'>Aperte na linha acima para testar o teclado!</h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <h3 class='text-center text-weight-medium'>
                            Vamos <span class='text-primary'>PRATICAR?</span>
                            <p>Na próxima tela, digite <span class='text-primary'>INETO</span> e passe para a próxima tela, onde iremos verificar se foi digitado corretamente.
                            </p>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <br>
                        <q-input class='q-title text-center' v-model='teste1' float-label="APERTE AQUI PARA COMEÇAR" placeholder="DIGITE INETO" clearable align='center'></q-input>
                        <h3 class='text-center text-weight-medium'>Aperte na linha acima para começar a digitar! Passe para a
                            <span class='text-green'>PRÓXIMA</span> tela para verificar
                        </h3>
                    </q-carousel-slide>
                    <neto-digitacao :model="teste1" :resposta="resposta1"></neto-digitacao>
                    <q-carousel-slide class='bg-white'>
                        <h4 class='text-center text-weight-medium'>
                            Vamos testar a digitação de <span class='text-primary'>NÚMEROS</span>.
                            <p>Na próxima tela, digite <span class='text-primary'>2018</span> e passe para a próxima tela, onde iremos verificar se foi digitado corretamente.
                            </p>
                        </h4>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <br>
                        <q-input class='q-title text-center' v-model='teste2' type='number' float-label="APERTE AQUI PARA COMEÇAR" placeholder="DIGITE 2018" clearable align='center'></q-input>
                        <h3 class='text-center text-weight-medium'>Aperte na linha acima para começar a digitar! Passe para a
                            <span class='text-green'>PRÓXIMA</span> tela para verificar
                        </h3>
                    </q-carousel-slide>
                    <neto-digitacao :model="teste2" :resposta="resposta2"></neto-digitacao>
                    <q-carousel-slide class='bg-white'>
                        <h3 class='text-center text-weight-medium'>
                            Vamos <span class='text-primary'>treinar mais</span>
                            <p>Na próxima tela, digite <span class='text-green'>EU SOU DO BRASIL</span> e passe para a próxima tela, onde iremos verificar se foi digitado corretamente.
                            </p>
                        </h3>
                    </q-carousel-slide>
                     <q-carousel-slide class='bg-white'>
                        <br>
                        <q-input class='q-title text-center' v-model='teste3' float-label="APERTE AQUI PARA COMEÇAR"
                        placeholder="DIGITE EU SOU DO BRASIL" clearable align='center'></q-input>
                        <h3 class='text-center text-weight-medium'>Aperte na linha acima para começar a digitar! Passe para a
                            <span class='text-green'>PRÓXIMA</span> tela para verificar
                        </h3>
                    </q-carousel-slide>
                    <neto-digitacao :model="teste3" :resposta="resposta3"></neto-digitacao>
                    <q-carousel-slide class='bg-white'>
                        <h3 class='text-center text-weight-medium'>
                            <p>Na próxima tela, digite <span class='text-primary'>49732561</span> e passe para a próxima tela, onde iremos verificar se foi digitado corretamente.
                            </p>
                        </h3>
                    </q-carousel-slide>
                    <q-carousel-slide class='bg-white'>
                        <br>
                        <q-input class='q-title text-center' v-model='teste4' type='number' float-label="APERTE AQUI PARA COMEÇAR" placeholder="DIGITE 49732561" clearable align='center'></q-input>
                        <h3 class='text-center text-weight-medium'>Aperte na linha acima e digite <span class='text-primary'>49732561</span> <p>Passe para a
                            <span class='text-green'>PRÓXIMA</span> tela para verificar</p>
                        </h3>
                    </q-carousel-slide>
                    <neto-digitacao :model="teste4" :resposta="resposta4"></neto-digitacao>
                </carousel-controller>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    import CarouselController from '../components/CarouselController.vue';
    import NetoDigitacao from '../components/NetoDigitacao.vue';
    
    export default {
        data() {
            return {
                /* eslint-disable global-require */
                imagem1: require('../assets/tecladoandroid.jpg'),
                imagem2: require('../assets/datilografia.png'),
                text: '',
                teste1: '',
                teste2: '',
                teste3: '',
                teste4: '',
                resposta1: 'ineto',
                resposta2: '2018',
                resposta3: 'eu sou do brasil',
                resposta4: '49732561',
                opcoesTeclado: [{
                        id: 0,
                        imagem: require('../assets/teclado-android.jpg'),
                        descricao: 'Este é um modelo comum de teclado',
                    },
                    {
                        id: 1,
                        imagem: require('../assets/tecladoapagar.jpg'),
                        descricao: 'Esse botão apaga a última coisa digitada',
                    },
                    {
                        id: 2,
                        imagem: require('../assets/tecladoemojis.jpg'),
                        descricao: 'Esse botão mostra "carinhas" conhecidas como emojis',
                    },
                    {
                        id: 3,
                        imagem: require('../assets/tecladoespaco.jpg'),
                        descricao: 'Esse botão serve para dar espaço entre as palavras',
                    },
                    {
                        id: 4,
                        imagem: require('../assets/tecladoshift.jpg'),
                        descricao: 'Esse botão alterna entre letras maíusculas e minúsculas'
                    },
                    {
                        id: 5,
                        imagem: require('../assets/tecladosimbolos.jpg'),
                        descricao: 'Esse botão alterna entre os símbolos e letras'
                    },
                    {
                        id: 6,
                        imagem: require('../assets/tecladoenter.jpg'),
                        descricao: 'Esse botão pula para a próxima linha'
                    },
                    {
                        id: 7,
                        imagem: require('../assets/tecladosugestoes.jpg'),
                        descricao: 'Essa barra mostra sugestões de palavras conforme você escreve'
                    },
                ],
            };
        },
        methods: {
            navigateToHome() {
                this.$router.push('/');
            },
            notificarAcertou() {
                this.$q.notify({
                    message: 'Parabéns! Você acertou! Continue a aula',
                    timeout: 3000,
                    type: 'positive',
                    color: 'positive',
                    textColor: 'black',
                    icon: 'thumb_up',
                    position: 'center',
                });
            },
            notificarErrou() {
                this.$q.notify({
                    message: 'Infelizmente você errou, volte e tente novamente!',
                    timeout: 3000,
                    type: 'negative',
                    color: 'negative',
                    textColor: 'white',
                    icon: 'thumb_down',
                    position: 'center',
                });
            },
            checkAcertou() {
                if (this.teste1.toLowerCase() === "ineto") {
                    this.notificarAcertou();
                } else {
                    this.notificarErrou();
                }
            },
            checkAcertou2() {
                if (this.teste2.toString().toLowerCase() === "2018") {
                    this.notificarAcertou();
                } else {
                    this.notificarErrou();
                }
            }
        },
        components: {
            carouselController: CarouselController,
            netoDigitacao: NetoDigitacao,
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
