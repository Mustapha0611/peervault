<template>
  <div class="text-font-color">
    <section>
      <h2 class="text-center font-semibold md:text-5xl text-4xl my-10 text-font-color">How it Works</h2>
    </section>
    <section class="md:px-20 px-10">
      <ul class="flex justify-center gap-10 flex-wrap">
        <li v-for="d in details" class="flex items-center gap-2 w-[400px] h-auto shadow-2xl p-5 rounded-lg" data-aos="fade-up">
            <div><img :src="d.img" alt="source" data-aos="zoom-in" data-aos-delay="300" class="md:w-[170px] w-[100px] h-[70px] md:h-[150px]"></div>
            <div>
                <h3 class="font-semibold md:text-2xl text-xl md:pb-5 pb-2" data-aos="zoom-in" data-aos-delay="500">{{ d.title }}</h3>
                <p class="md:text-[15px]" data-aos="zoom-in" data-aos-delay="700">{{ d.body }}</p>
            </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import share from "../assets/share.png"
import secure from '../assets/secure.png'
import upload from '../assets/upload.png'
const details = ref([
    {
        title:"Upload",
        body:"Create a room and upload your files.",
        img:upload
    },
    {
        title:"Encrypt",
        body:"Wait for your files to finish encrypting.",
        img:secure
    },
    {
        title:"Share",
        body:"Share your unique room ID with anyone to download the files.",
        img:share
    },
]);
</script>
