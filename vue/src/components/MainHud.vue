<template>
  <div v-if="bars && bars != {}" id="hud-cont" class="absolute items-center justify-center" :class="{['car left-['+hud.left+'px]']:isCar, 'nocar':!isCar}">
    <Transition name="fade">
    <div v-if="bars.health <= 50" class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.health+1)+'%]'"></div>
      <i class="absolute fas fa-heart text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>
    
    <Transition name="fade">
    <div v-if="bars.armor >= 20" class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.armor+1)+'%]'"></div>
      <i class="absolute fas fa-shield-alt  text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>

    <Transition name="fade">
    <div v-if="bars.hunger <= 50" class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.hunger+1)+'%]'"></div>
      <i class="absolute fas fa-pizza-slice text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>

    <Transition name="fade">
    <div v-if="bars.thrist <= 50" class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.thrist+1)+'%]'"></div>
      <i class="fas fa-tint absolute text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>

    <Transition name="fade">
    <div v-if="bars.stress >= 50" class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.stress+1)+'%]'"></div>
      <i class="absolute fas fa-frown text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>

    <Transition name="fade">
    <div v-if="bars.stamina <= 50" class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.stamina+1)+'%]'"></div>
      <i class="absolute fas fa-running text-[1.7vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>

    <Transition name="fade">
    <div class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]" :class="{'border-green-500':hud.isTalking}">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.voice+1)+'%]'"></div>
      <i class="absolute fas fa-microphone-alt text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>

    <Transition name="fade">
    <div v-if="bars.radio > 0" class="duration-200 relative overflow-hidden  border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]" :class="{'border-green-500':hud.radioTalking}">
      <div class="duration-200 bg-[rgba(0,0,0,.7)] w-[101%]" :class="'h-['+(bars.radio+1)+'%]'"></div>
      <i class="absolute fas fa-walkie-talkie text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"></i>
    </div>
    </Transition>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MainHud',
  props: {
    hudInfo:Object
  },
  setup:(props)=>{
    const bars = ref({});
    const isCar = ref(props.hudInfo.isCar);
    const hud = ref({});

    window.addEventListener("message", (event) =>{
      if (event.data.hudInfo){
        bars.value = event.data.hudInfo.bars;
        hud.value = event.data.hudInfo;
        isCar.value = event.data.hudInfo.isCar;
      }
    });

    return { bars, isCar, hud }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.car {
  display: flex;
  flex-direction: column;
  opacity: 1;
  animation: car 1s;
  bottom: 2%;
}

.nocar{
  display: flex;
  flex-direction: row;
  opacity: 1;
  animation: car 1s;
  bottom: 1%;
  left: .5%;
}

@keyframes car{
  0%{opacity: 0;}
  100%{opacity: 1;}
}
</style>
