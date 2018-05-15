<template>
<div style="display: grid; grid-template-rows: 1fr auto; height: calc(100vh - 48px);">
  <q-carousel class="text-black q-ma-md bg-white"
  no-swipe
  v-model='slide'>
    <slot></slot>
  </q-carousel>
  <div class='row gutter-sm'
  style='margin-left: 0px; margin-bottom: 16px; margin-right: 16px;'>
    <div class='col-6'>
            <q-btn
           class='full-width'
           size='xl'
           color='red'
           push
           @click='slide = slide - 1'>
                Anterior
          </q-btn>
    </div>
    <div class='col-6'>
            <q-btn
           class='full-width'
           size='xl'
           color='green'
           push
           @click='slide = slide + 1'>
                Próximo
            </q-btn>
    </div>
    <div class='col-12'>
            <q-btn
           class='text-black full-width'
           size='xl'
           color='light-blue-1'
           push
           @click='confirm.handler()'
           >
                Voltar ao início
            </q-btn>
    </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      confirm: {
        label: 'Confirmar',
        icon: 'done_all',
        handler: () => {
          this.$q
            .dialog({
              title: 'Confirmar',
              message: 'Tem certeza que deseja voltar?',
              ok: 'Sim',
              cancel: 'Não',
            })
            .then(() => {
              this.navigateToHome();
            })
            .catch(() => {
            });
        },
      },
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
  .modal-body{
    font-size: 30px;
    color: black;
  }
</style>
