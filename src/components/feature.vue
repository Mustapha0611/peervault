<template>
  <div class="px-10 py-10">
    <section class="title">
      <h2
        class="text-center font-semibold md:text-5xl text-4xl my-10 text-font-color"
        data-aos="fade-up"
      >
        Features
      </h2>
    </section>
    <section
      class="flex flex-col flex-wrap md:flex-row justify-center gap-10 items-center"
    >
      <div
        class="shadow-2xl md:w-[420px] w-[90%] h-auto p-5 text-font-color rounded-lg hover:scale-105 transition-all overflow-hidden"
        v-for="feature of features"
        data-aos="fade-up"
      >
      <div class="my-5 flex justify-center" data-aos="zoom-in" data-aos-delay="300">
            <img :src="feature.img" alt="description" class="w-20 h-20">
        </div>
        <h3 class="text-2xl pb-5 font-semibold text-center block" data-aos="zoom-in" data-aos-delay="500">
          {{ feature.title }}
        </h3>
    
        <p class="px-5 text-center" data-aos="fade-up" data-aos-delay="500">
          {{ feature.content }}
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import fast from "../assets/fast-charge.png";
import design from "../assets/ux-design.png";
import access from "../assets/access.png";

const features = ref([
  {
    title: "Faster and Reliable",
    content:
      "Enjoy lightning-fast file transfers with our decentralized network. Say goodbye to slow download speeds and unreliable connections. Your files are distributed across a network of nodes, ensuring quick and seamless access.",
    img: fast,
  },
  {
    title: "Global Accessibility",
    content:
      "Access your files from anywhere in the world without the restrictions of traditional servers. Our decentralized approach ensures that your data is available whenever and wherever you need it.",
    img: access,
  },
  {
    title: "User Friendly Interface",
    content:
      " Our intuitive interface makes file sharing and management a breeze. Whether you're a tech enthusiast or a casual user, you'll find our platform easy to navigate and use.",
    img: design,
  },
]);
</script>
<!-- 🔐 **Enhanced Privacy:** Your files are no longer stored on vulnerable centralized servers. With decentralized file sharing, you regain control over your data, keeping it private and away from prying eyes.

🚀 **Faster and Reliable:** Enjoy lightning-fast file transfers with our decentralized network. Say goodbye to slow download speeds and unreliable connections. Your files are distributed across a network of nodes, ensuring quick and seamless access.

🌐 **Global Accessibility:** Access your files from anywhere in the world without the restrictions of traditional servers. Our decentralized approach ensures that your data is available whenever and wherever you need it.

💼 **User-Friendly Interface:** Our intuitive interface makes file sharing and management a breeze. Whether you're a tech enthusiast or a casual user, you'll find our platform easy to navigate and use.

🛡️ **Security First:** Rest easy knowing that your files are protected by the latest cryptographic techniques. Decentralization means enhanced security, reducing the risk of data breaches and unauthorized access. -->
