<template>
    <div class="absolute top-[1vh] left-[50%] -translate-x-[50%] text-[2vh] font-medium font-[Quicksand] drop-shadow-[1px_1px_0_black]">{{ street }}</div>
    <div class="absolute bottom-[0%] left-[50%] translate-x-[-50%] font-[digital]">
      <div class="relative">
        <q-circular-progress
          rounded
          :value="55"
          size="10vh"
          :thickness="0.06"
          color="[rgba(113,113,113,0.6)]"
          track-color="transparent"
          class="q-ma-md r rotate-[-130deg] absolute top-[0%] left-[0%] translate-x-[0%] translate-y-[0%]"
        />
        <q-circular-progress
          rounded
          :value="rpm.value"
          size="10vh"
          :thickness="0.06"
          :color="rpm.color"
          track-color="transparent"
          class="q-ma-md r rotate-[-130deg]"
        />
        <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] text-[2.5vh] flex flex-col items-center">
          <div :class="{'emergency':emergency}" class="drop-shadow-[1px_1px_0_black]">{{speed}}</div>
          <div class="text-[1.2vh] font-normal font-[Quicksand]" :class="{'emergency':emergency}">KMH</div>
        </div>
      </div>

      <div class="absolute bottom-[5%] right-[-20%]">
        <q-circular-progress
          rounded
          :value="60"
          size="5vh"
          :thickness="0.1"
          color="[rgba(113,113,113,0.6)]"
          track-color="transparent"
          class="q-ma-md r rotate-[-120deg] absolute top-[0%] left-[0%] translate-x-[0%] translate-y-[0%]"
        />
        <q-circular-progress
          rounded
          :value="fuel"
          size="5vh"
          :thickness="0.1"
          color="white"
          track-color="transparent"
          class="q-ma-md r rotate-[-120deg]"
        />
        <i class="fas fa-gas-pump absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></i>
      </div>

      <i class="fas fa-engine-warning absolute text-[1.8vh] bottom-[15%] left-[-15%]" :class="{'text-white':engine > 560, 'text-yellow-500':engine <= 560 && engine > 200, 'text-red-500':engine <= 200}"></i>
      
      <div class="absolute text-[1.8vh] bottom-[11%] left-[50%] font-medium translate-x-[-50%] drop-shadow-[1px_1px_0_black]">{{gear}}</div>
      
      <img v-if="!belt" class="absolute bottom-[14%] right-[-36%] w-[2.5vh] belt" src="https://cdn.discordapp.com/attachments/826477720707792929/1030071188015304754/Sin_titulo-1.png">
      
      <i v-if="cruise" class="fas fa-tachometer-alt-fast top-[-10%] left-[50%] -translate-x-[50%]"></i>
    </div>
    <audio id="cinturon" autoplay></audio>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CarHud',
  components: {},
  setup: () =>{
    const speed = ref(0);
    const fuel = ref(0);
    const rpm = ref({color:"[white]", value:0});
    const engine = ref(100);
    const emergency = ref(false);
    const cruise = ref(false);
    const belt = ref(false);
    const gear = ref("");
    const street = ref("");

    window.addEventListener("message", ({data})=>{
      if(data.carInfo && data.carInfo.bars){
        belt.value = data.carInfo.belt || data.carInfo.moto;
        speed.value = data.carInfo.speed;
        fuel.value = data.carInfo.bars.fuel;
        engine.value = data.carInfo.bars.engine;
        emergency.value = data.carInfo.emer;
        cruise.value = data.carInfo.cruiser;
        gear.value = data.carInfo.gear;

        if(data.carInfo.street){
          street.value = data.carInfo.street
        }
      }

      if(data.carInfo && data.carInfo.bars && data.carInfo.bars.rpm){
        rpm.value.value = data.carInfo.bars.rpm * 55;
        if(rpm.value.value > 40 && rpm.value.value < 50){
          rpm.value.color = "[yellow]"
        }else if(rpm.value.value >= 50){
          rpm.value.color = "[red]"
        }else{
          rpm.value.color = "[white]"
        }
      }

      if (data.transactionType == "playSound") {
        let audio = document.getElementById("cinturon")
        audio.src = "./sounds/"+event.data.transactionFile+".ogg"
        audio.play()
      }
    })

    return { speed, fuel, engine, emergency, cruise, belt, rpm, gear, street }
  }
}
</script>

<style scoped>
@font-face {
  font-family: digital;
  src: url("@/assets/Adventure.otf");
}

*{
  color: white;
}

.emergency{
  animation: emergency 3s infinite;
}

.belt{
  animation: blink 1s infinite;
}

@keyframes emergency{
  0%{color:blue}
  25%{color:red}
  50%{color:blue}
  75%{color:red}
  100%{color:blue}
}

@keyframes blink {
  0%{opacity: 1;}
  100%{opacity: 0;}
}
</style>
