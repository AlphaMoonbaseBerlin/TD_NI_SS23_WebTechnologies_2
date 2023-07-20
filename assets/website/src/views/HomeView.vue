<script setup>
  import StyledButton from "@/components/StyledButton.vue";
  import {Axios} from "@/modules/http.js";
  import { ref } from "vue";
  const available_generators = ref([]);
  (async () => { 
    available_generators.value = (await Axios.get("generators")).data;
    
  })();


  function select( target ) {
    Axios.post("select", {
      target,
      time : 1
    })
  }
</script>

<template>
   <div class="flex flex-col space-y-4">
    <h2 class="text-center text-3xl">Select Playback</h2>
    <StyledButton v-for="generator in available_generators"
      :style="{ 
        'background-image'    : `url('${Axios.defaults.baseURL}/preview/${generator}')`,
        'background-position' : 'center'
      }"
      class="bg-slate-200"
      @click="() => select(generator)">
        {{ generator }}
      </StyledButton>
  </div> 
</template>
