<template>
  <header
    class="flex w-full h-[10vh] shadow-md justify-between items-center md:pl-10 pl-5 pr-12 top-0 left-0 bg-gradient-to-r from-primary to-secondary "
  >
    <span
      class="md:hidden absolute top-5 right-5 text-2xl text-slate-100 cursor-pointer"
      @click="toggleMenu"
    >
      <img src="@/assets/menu.png" alt="" />
    </span>
    <div class="logo flex">
      <span class="px-1 md:text-2xl text-xl">
        <img src="@/assets/logo2.png" class="md:w-auto h-10" alt="" />
      </span>
      <nav>
      <ul
        class="flex md:justify-start justify-center md:items-start transition-all items-center bg-secondary md:bg-transparent text-slate-50 md:flex-row flex-col md:relative absolute w-full h-[100dvh] md:h-12 -left-[100%] md:transform-none top-0 md:left-0  z-50"
        :class="{ show: showMenu }"
      >
        <span
          class="md:hidden absolute top-5 right-5 w-5 text-lime-100 cursor-pointer"
          @click="toggleMenu"
        >
          <img src="../assets/close.png" alt="" class="w-full h-full" />
        </span>
        <li class="py-2 px-4">
         <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="py-2 px-4">
            <RouterLink to="/">Views</RouterLink>
        </li>
        <li class="py-2 px-4">
            <RouterLink to="/">Contact</RouterLink>
        </li>
      
      </ul>
    </nav>
    </div>
    <router-link to="/"
          class="md:flex justify-between md:relative absolute bottom-12 right-[35%] md:right-0 md:top-0 cursor-pointer border-2 text-font-color border-buttonbg px-5 hidden  py-1 bg-buttonbg rounded-md font-medium"
        >
        Login
       </router-link>
    
  </header>
</template>
<script>
// import Button from "primevue/button";
export default {
  // components: {
  // Button,
  // },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
<style>
a:focus {
  color: black;
  border-bottom: 3px solid rgb(2, 2, 2);
}
.show {
  transform: translateX(100%);
  transition: 0.3s all;
}
@media screen and (min-width: 768px) {
  .show {
    transform: translateX(0%);
    transition: 0.1s all;
  }
}
</style>
