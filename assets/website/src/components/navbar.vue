<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavButton from "@/components/NavButton.vue";
</script>

<template>
    <header class="w-full">
        <nav class="flex justify-center">
        
          <NavButton to="/">Home</NavButton>
          <NavButton to="/select_variant">Select Variant</NavButton>
          <NavButton to="/load_project">Load Project</NavButton>
          <!-- <NavButton to="/device_control">Device Control</NavButton> -->
        </nav>
    </header>
</template>

<style lang="">
    
</style>