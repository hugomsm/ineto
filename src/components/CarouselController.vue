<template>
  <div class='fixed-bottom q-ml-md q-mb-md'>
            <q-btn
            size='xl'
            color='red'
            push
            @click='slide = slide - 1'>
                Anterior
            </q-btn>
            <q-btn
            size='xl'
            color='green'
            push
            @click='slide = slide + 1'>
                Próximo
            </q-btn>
            <q-btn
            class='text-black'
            size='xl'
            color='light-blue-1'
            push
            >
                Voltar ao início
            </q-btn>
            </div>
</template>

<script>
export default {
};
</script>
