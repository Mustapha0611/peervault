<template>
    <div class="max-h-[120dvh] text-font-color">
       
      <h2 class="text-center md:py-10 py-5 font-semibold text-2xl">Create A Room</h2>
      <main class="bgmain flex justify-center items-center flex-col md:h-[60dvh] mt-20 md:mt-0 md:mx-20 mx-10 md:px-16 px-5 gap-10 py-10">
        <h3 class="font-semibold text-xl">Enter Room ID</h3>
        <div>
            <input type='text' aria-label="ROOMID" v-model="roomId" class="roomid md:w-[500px] focus:outline-none"/>
        </div>
        <button @click="enterRoom"  class="bg-buttonbg px-5 py-3 rounded-md gap-4 text-xl hover:bg-transparent transition-all border-2 border-buttonbg">Create A Room</button>
   
      </main>
    
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import { useRouter, useRoute } from 'vue-router'
  // Empty at first
 
  const roomId = ref('')
  const router = useRouter()
  const route = useRoute()

  const enterRoom = () =>{
    //validate the ID then navigate to room
   router.push('/Room')
  }

  </script>
  
  <style scoped>
  .bgmain {
    border-radius: 9px;
    background: rgba(0, 0, 0, 0.25);
  }
  .roomid{
    border-radius: 2px;
  border: 1px solid #6fa660;
  background: rgba(111, 166, 96, 0.2);
  padding: 4px 10px;
  }

  </style>
  