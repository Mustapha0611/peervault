<script setup>
// import { AOS } from 'aos';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import headerSection from './components/headerSection.vue';
import aos from 'aos';
// import HelloWorld from './components/HelloWorld.vue'
onMounted(()=>{
  aos.init()
})
</script>

<template>
  <div class="bg-gradient-to-r from-primary to-secondary h-auto">
    <headerSection  class="sticky top-0 z-40"/>
    <RouterView class="-z-40" />
  </div>
</template>

<style scoped>
*{
  font-family: 'Inter', sans-serif;
}
</style>
