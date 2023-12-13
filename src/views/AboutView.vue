<template>
  <div class="about text-font-color md:h-[90vh] h-auto">
    <h1 class="text-center font-semibold text-3xl py-6">About Us</h1>
    <main class="flex gap-10 px-10 md:px-20 items-center py-10 md:flex-row flex-col"  >
      <section class="flex-1">
        <p>
          At PeerVault, we believe in a future where data belongs to you, not to
          corporations. That's why we built a decentralized file sharing app
          powered by web 5, putting the power and privacy of your files back in
          your hands. Our mission is to revolutionize the way we share and store
          information. By leveraging the security and resilience of web 5
          technology, we offer a platform where you can:
        </p>
        <ul class="list-disc">
          <li v-for="ab of AboutContent" class=" list-item list-disc">
            <p><span>{{ ab.title }}: </span>{{ ab.content }}</p>
          </li>
        </ul>
      </section>
      <section class="flex-1">
        <img src="../assets/fileshare.png" class="md:w-[500px] md:h-[400px]" alt="">
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const AboutContent = ref([
  {
    title: "Securely share files",
    content:
      "Share your data with anyone, knowing it's encrypted and distributed across a global network, not vulnerable on a single server.",
  },
  {
    title: "Own Your Own data",
    content:
      "You control your files, not us. No data breaches, no third-party access, just your data, your way.",
  },
  {
    title: "Censor-resistant sharing",
    content:
      "Say goodbye to censorship! Our decentralized network ensures your files are accessible, no matter where you are or what restrictions exist",
  },
  {
    title: "Direct peer-to-peer transfers",
    content:
      "Forget slow and expensive cloud storage. Share files directly with others at lightning speed.",
  },
  {
    title: "Open-source and transparent",
    content:
      "We believe in transparency. Our app is open-source, so you can trust how it works and see our commitment to your privacy.",
  },
]);
</script>
Securely share files: Share your data with anyone, knowing it's encrypted and
distributed across a global network, not vulnerable on a single server. Own your
data: You control your files, not us. No data breaches, no third-party access,
just your data, your way. Censor-resistant sharing: Say goodbye to censorship!
Our decentralized network ensures your files are accessible, no matter where you
are or what restrictions exist. Direct peer-to-peer transfers: Forget slow and
expensive cloud storage. Share files directly with others at lightning speed.
Open-source and transparent: We believe in transparency. Our app is open-source,
so you can trust how it works and see our commitment to your privacy.
