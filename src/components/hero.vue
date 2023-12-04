<template>
  <div
    class="flex md:flex-row flex-col md:h-[90dvh] items-center h-auto md:pt-20 pt-5 px-10 md:p-0 -z-50 overflow-hidden"
  >
    <section class="flex-1 lg:px-20 md:px-10">
      <div class="text-font-color">
        <h1
          class="font-bold py-2 md:py-0 lg:text-5xl text-4xl leading-[1.5] lg:leading-normal"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Empower Your Data with Decentralized File Sharing
        </h1>
        <h2 class="py-5 font-semibold text-3xl" data-aos="fade-left" data-aos-delay="400">
          Experience a New Era of Privacy, Security, and Freedom in File Sharing
        </h2>
        <p>
          Welcome to Peer vault, where we redefine the way you share and store your files. 
          Say goodbye to traditional centralized servers and embrace the future of decentralized
          file sharing.Your data remains private, secure, and accessible only to those you choose to share it with.
        </p>
        <div class="py-10 flex md:flex-row flex-col gap-3">
          <router-link
            to="/"
            class="text-white px-3 py-3 text-center text-sm font-semibold transition-all"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <button class="bg-buttonbg px-5 py-3 rounded-md flex items-center gap-4 text-xl">Get started <img src="@/assets/nxt.png"></button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="flex-1">
      <div class="md:w-[80%] h-[450px]">
        <img src="@/assets/share.svg" alt="" class="h-full w-full" />
      </div>
    </section>
  </div>
</template>
