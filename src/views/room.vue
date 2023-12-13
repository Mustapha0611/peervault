<template>
  <div class="h-[90dvh] text-font-color">
    <h2 class="text-center md:py-10 py-5 font-semibold text-2xl">
      Join A Room
    </h2>
    <main
      class="bgmain flex justify-center items-center flex-col md:h-[60dvh] mt-20 md:mt-0 md:mx-20 mx-10 md:px-16 px-5 gap-10 py-5"
    >
    <h2 class="text-xl font-semibold text-center">Official Documents-Room</h2>
      <ul class=" px-5 py-3 w-[90%]">
        <li v-for="file in files" class="flex justify-between pb-5">
          <p>
            {{ file.name }}
          </p>
          <p>{{ file.size }} kb</p>
          <span>
            <a :href="file.downlaodUrl"
              class="flex items-center gap-2 font-thin">Download File
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.55 4.5C14.025 1.95 11.775 0 9 0C6.825 0 4.95 1.2 4.05 3C1.725 3.3 0 5.175 0 7.5C0 9.975 2.025 12 4.5 12H14.25C16.35 12 18 10.35 18 8.25C18 6.3 16.425 4.65 14.55 4.5ZM12.75 6.75L9 10.5L5.25 6.75H7.5V3.75H10.5V6.75H12.75Z"
                  fill="white"
                /></svg >
            </a>
          </span>
        </li>
      </ul>
      <button
        @click=""
        class="bg-buttonbg px-5 py-3 rounded-md flex items-center gap-4 text-xl hover:bg-transparent transition-all border-2 border-buttonbg"
      >
        Download All      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.55 4.5C14.025 1.95 11.775 0 9 0C6.825 0 4.95 1.2 4.05 3C1.725 3.3 0 5.175 0 7.5C0 9.975 2.025 12 4.5 12H14.25C16.35 12 18 10.35 18 8.25C18 6.3 16.425 4.65 14.55 4.5ZM12.75 6.75L9 10.5L5.25 6.75H7.5V3.75H10.5V6.75H12.75Z"
                  fill="white"
                /></svg >
      </button>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";
const files = ref([
  {
    name: "file1",
    size: 23,
    downlaodUrl: "http://ion.pdf",
  },
  {
    name: "file2",
    size: 23,
    downlaodUrl: "http://ion.pdf",
  },
  {
    name: "file3",
    size: 23,
    downlaodUrl: "http://ion.pdf",
  },
]);
</script>

<style scoped>
.bgmain {
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.25);
}
.roomid {
  border-radius: 2px;
  border: 1px solid #6fa660;
  background: rgba(111, 166, 96, 0.2);
  padding: 4px 10px;
}
</style>
