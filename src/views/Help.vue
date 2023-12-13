<template>
    <div class="help text-font-color md:h-[90vh] h-auto">
      <h1 class="text-center font-semibold text-3xl py-6">About Us</h1>
      <main class=" px-10 md:px-20  pb-10"  >
        <section class="flex-1">
          <p class="text-center text-3xl">
            We know that transitioning to a new way of sharing files can be confusing, so we're here to help! Here are some resources to get you started:
          </p>
          <h3 class="my-3 text-xl font-semibold">Get Started</h3>
          <ul class="list-disc">
            <li class=" list-item mx-10">Create a room</li>
            <li class=" list-item mx-10">Upload files you want to share to the decentralized server</li>
            <li class=" list-item mx-10">Create the unique DID for the room</li>
            <li class=" list-item mx-10">Share DID to give recipients access to join the room.</li>
          </ul>
          <h3 class="font-semibold text-2xl my-5">FAQS</h3>
          <ul class="">
            <li v-for="ab of helpContent" class="pt-4">
              <p class="pb-2 font-bold">{{ ab.title }}</p>
              {{ ab.content }}
            </li>
          </ul>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const helpContent = ref([
    {
      title: "How does encryption work?",
      content:
        "We use the web5 encryption algorithms to protect your data at rest and in transit.",
    },
    {
      title: "Is my data really decentralized?",
      content:
        "Yes! Your files are distributed across a network of nodes, making them resilient and censorship-resistant.",
    },
    {
      title: "Can I share files with anyone?",
      content:"Yes, you can share files with anyone who has the app or a link to the file.",
    },
    {
      title: "What happens if I lose my device?",
      content:
        "Your files are stored on the server for up to 24hrs.",
    },
    {
      title: "How can I get support?",
      content:
        "We're here to help! Contact us through our online form or join our community forum.",
    },
  ]);
  </script>
FAQs:
How does encryption work?
We use the web5 encryption algorithms to protect your data at rest and in transit.
Is my data really decentralized?
Yes! Your files are distributed across a network of nodes, making them resilient and censorship-resistant.
Can I share files with anyone?
Yes, you can share files with anyone who has the app or a link to the file.
What happens if I lose my device?
Your files are stored on the server for up to 24hrs.
How can I get support?
We're here to help! Contact us through our online form or join our community forum.
  