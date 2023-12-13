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
    <Transition name="fade">
      <RouterView class="-z-40" />
    </Transition>
  </div>
</template>

<style scoped>
*{
  font-family: 'Inter', sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
