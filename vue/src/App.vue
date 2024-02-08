<template>
  <img v-if="showHud" class="w-[10vh] absolute top-[4vh] right-[4vh] opacity-[80%]" src="./assets/logo.png">
  <MainHud v-if="showHud" :hudInfo="hudInfo"/>
  <Transition name="slide-fade">
    <CarHud v-if="showHud && hudInfo.isCar && carInfo && carInfo.bars" :carInfo="carInfo"/>
  </Transition>
</template>

<script>
import MainHud from './components/MainHud.vue'

import CarHud from './components/CarHud.vue'

import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    MainHud,
    CarHud
  },

  setup:()=>{
    const carInfo = ref({});
    const hudInfo = ref({});
    const showHud = ref(true);

    window.addEventListener("message", (event) =>{
      if (event.data.carInfo){
        carInfo.value = event.data.carInfo;
      }

      if (event.data.hudInfo){
        hudInfo.value = event.data.hudInfo;
      }

      showHud.value = event.data.showHud === true || event.data.showHud === false ? event.data.showHud : showHud.value
    });

    return { carInfo, hudInfo, showHud }
  }
}
</script>

<style>

body{overflow: hidden;}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  margin-bottom: -20%;
  opacity: 0;
}
</style>
