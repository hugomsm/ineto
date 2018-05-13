<template>
  <q-layout>
    <q-page-container >
        <q-page class='bg-light-blue-9'>
            <q-carousel class="text-white q-ma-md" v-model="slide">
                <q-carousel-slide class="bg-primary">
                    Slide 1
                </q-carousel-slide>
                <q-carousel-slide class="bg-secondary">
                    Slide 2
                </q-carousel-slide>
                <q-carousel-slide class="bg-tertiary">
                    Slide 3
                </q-carousel-slide>
            </q-carousel>
            <q-btn @click='slide = slide + 1'>
                Mah oe
            </q-btn>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>

export default {
  data() {
    return {
      slide: 0,
    };
  },
};
</script>
