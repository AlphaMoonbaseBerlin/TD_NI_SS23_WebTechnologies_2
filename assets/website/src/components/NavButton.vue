<template>
    <router-link :to="props.target" custom v-slot="{ navigate }">
        <button class="h-12 max-w-full w-64 bg-slate-400 text-cyan-100"
            @click="navigate" @keypress.enter="navigate" role="link">
            <slot></slot>
        </button>
    </router-link>
</template>
<script setup>
    const props = defineProps({
        target: String
    })
</script>
<style lang="">
    
</style>