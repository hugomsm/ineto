<template>
    <q-carousel-slide>
    
        <q-btn class='text-black absolute-center' size='xl' color='light-blue-3' @click='checkAcertou'>
    
            Verificar
        </q-btn>
    
    </q-carousel-slide>
</template>

<script>
    export default {
    
        props: ['model', 'resposta', ],
    
        data() {
    
            return {};
    
        },
    
        methods: {
    
            notificarAcertou() {
    
                this.$q.notify({
    
                    message: 'Parabéns! Você acertou!',
    
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
                    message: 'Infelizmente você errou, tente novamente!',
                    timeout: 3000,
                    type: 'negative',
                    color: 'negative',
                    textColor: 'white',
                    icon: 'thumb_down',
                    position: 'center',
                });
            },
            checkAcertou() {
                if (this.model != null) {
                    if (this.model.toString().toLowerCase() === this.resposta.toString().toLowerCase()) {
                        this.notificarAcertou();
                    } else {
                        this.notificarErrou();
                    }
                } else {
                    this.notificarErrou();
                }
            }
        }
    }
</script>
