<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navbar from "./components/navbar.vue"
import info from "@/components/info.vue"
</script>

<template>
  <div class="min-h-screen w-screen max-w-6xl m-auto flex flex-col">
    <!-- <navbar/> -->
    <!-- <info/> -->
    <main class="justify-center flex space-x-12 h-full">
      <RouterView  />
    </main>
    
  </div>
  
</template>

<style>
</style>
