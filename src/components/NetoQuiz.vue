<template>
    <q-carousel-slide class='bg-white'>
        <p class='text-center'><img :src='imagem' height='60%' width='60%'></p>
        <div class='row gutter-sm' style='margin-left: 0px; margin-bottom: 16px; margin-right: 16px;'>
            <div v-for='opcao in opcoes' v-bind:key='opcao.id' class='col-6'>
                <q-btn class='full-width text-black' size='xl' :color='opcao.cor' @click="checarResposta(opcao.id,$event)" push :label='opcao.resposta'>
                </q-btn>
            </div>
        </div>
    </q-carousel-slide>
</template>

<script>
    export default {
        props: ['opcoes', 'imagem', 'respostaCerta'],
        data() {
            return {};
        },
        methods: {
            notificarAcertou() {
                this.$q.notify({
                    message: 'Parabéns! Você acertou!',
                    timeout: 2000,
                    type: 'positive',
                    color: 'positive',
                    textColor: 'black',
                    icon: 'thumb_up',
                    position: 'center',
                });
            },
            notificarErrou() {
                this.$q.notify({
                    message: 'Infelizmente você errou, tente novamente!',
                    timeout: 2000,
                    type: 'negative',
                    color: 'negative',
                    textColor: 'black',
                    icon: 'thumb_down',
                    position: 'center',
                });
            },
            checarResposta(id, e) {
                console.log(e);
                if (e.target.textContent.toLowerCase() === this.respostaCerta.toLowerCase()) {
                    this.opcoes[id - 1].cor = 'green';
                    this.notificarAcertou();
                } else {
                    this.opcoes[id - 1].cor = 'red';
                    this.notificarErrou();
                }
            },
        }
    }
</script>
