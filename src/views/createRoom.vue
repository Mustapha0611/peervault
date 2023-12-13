<template>
  <div class="md:max-h-auto h-auto text-font-color">
    <h2 class="text-center md:py-10 py-5 font-semibold text-2xl">
      Create A Room
    </h2>
    <main
      class="bgmain flex flex-col md:flex-row md:mx-20 mx-10 md:px-16 px-5 gap-10 py-10"
    >
      <section class="flex-1">
        <h3 class="text-2xl font-semibold md:w-72">
          Upload and Share Your Field here
        </h3>
        <p>Your files are stored for 24 hours</p>
        <div>
          <label for="Room name" class="block mt-5">Room Name:*</label>
          <input
            type="text"
            name="Room name"
            id="text"
            class="md:w-[70%] w-[100%] py-1"
            v-model="room"
          />
        </div>
        <div>
          <label for="details" class="block mt-5">Room Description:*</label>
          <textarea
            name="details"
            id="text"
            class="md:w-[70%] w-[100%] h-44"
            v-model="desc"
          ></textarea>
        </div>
      </section>
      <section class="flex-1">
        <input
          type="file"
          name=""
          id=""
          class="w-[100%] border-2 md:h-[400px] h-[150px] bg-buttonbg border-dashed rounded-xl"
        />
      </section>
    </main>
    <div class="flex justify-center py-6">
      <button
        @click="createWeb5"
        class="bg-buttonbg px-5 py-3 rounded-md flex items-center gap-4 text-xl hover:bg-transparent transition-all border-2 border-buttonbg"
      >
        Create A Room
      </button>
    </div>
    <!-- <Toast /> -->
    <div
      class="modal flex items-center justify-center absolute bottom-0 right-0 h-[100vh] w-full z-50"
      v-if="showModal"
    >
      <div
        class="flex flex-col justify-center items-center p-3 bg-font-color md:h-[80dvh] h-[300px] rounded-lg md:w-[70%] w-[90%] text-black"
      >
        <h2 class="font-semibold md:text-3xl text-xl text-center">
          Room Created Successfully 🎉
        </h2>
        <p class="pt-4">Copy and share the room ID with your friends.</p>
        <p
          class="flex items-center md:gap-10 gap-2 py-1 did md:px-5 px-2 md:text-lg text-sm"
        >
          {{ uid }}
          <span class="cursor-pointer" @click="sucessMessage()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 10 11"
              fill="none"
            >
              <path
                d="M7.36842 0H1.05263C0.471053 0 0 0.4475 0 1V8H1.05263V1H7.36842V0ZM8.94737 2H3.15789C2.57632 2 2.10526 2.4475 2.10526 3V10C2.10526 10.5525 2.57632 11 3.15789 11H8.94737C9.52895 11 10 10.5525 10 10V3C10 2.4475 9.52895 2 8.94737 2ZM8.94737 10H3.15789V3H8.94737V10Z"
                fill="black"
              />
            </svg>
          </span>
        </p>
        <button
          class="bg-buttonbg text-font-color px-5 py-2 rounded-lg mt-10"
          @click="modalState"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import { DidIonMethod } from "@web5/dids"
import { Web5 } from "@web5/api/browser";
// Empty at first
const did = ref(null);
// const web5 = ref(null);
const toast = useToast();
const showModal = ref(false);
const room = ref("");
const desc = ref("");
const sucessMessage = () => {
  toast.add({
    severity: "success",
    summary: "Success Message",
    detail: `Copied ${uid.value}`,
    life: 3000,
  });
  console.log("copied");
  // toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
const modalState = () => {
  showModal.value = !showModal.value;
};
const validateForm = () => {
  if (!room.value || !desc.value) {
    showModal.value = !showModal.value;
  } else {
    toast.add({
      severity: "error",
      summary: "Error message",
      detail: "Please fill the input field",
      life: 3000,
    });
  }
};
onMounted( async () => {
  const { web5, did: myDid } = await Web5.connect();
  did.value = myDid;
})
const createWeb5 =   () => {
//Creates a DID using the did:ion method
// const didIon = await DidIonMethod.create();

// //DID and its associated data which can be exported and used in different contexts/apps
// const portableDID = JSON.stringify(didIon);

// //DID string
// const did = didIon.did;

// //DID Document
// const didDocument = JSON.stringify(didIon.document);

// //Cryptographic keys associated with DID
// const keys = JSON.stringify(didIon.keySet);

// //Primary form of a DID. more info: https://www.w3.org/TR/did-core/#dfn-canonicalid
// const canonicalId = didIon.canonicalId;
//   const { record } = await Web5.dwn.records.create({
//     data: 'Hello, Web5!',
//     message: {
//       dataFormat: 'text/plain',
//     },
//   });
//   console.log("my did is")
modalState()
 
};
</script>

<style scoped>
.bgmain {
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.25);
}
#text {
  border-radius: 2px;
  border: 1px solid #6fa660;
  background: rgba(111, 166, 96, 0.2);
  padding: 4px 10px;
}
#text:focus {
  outline: none;
}
.modal {
  /* border-radius: 12px; */
  background: linear-gradient(
    114deg,
    rgba(31, 28, 28, 0.7) 7.04%,
    rgba(54, 138, 191, 0.7) 85.23%
  );
}
.modal > div {
  border-radius: 9px;
  background: linear-gradient(239deg, #fff 13%, #368abf 116.78%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.did {
  border-radius: 2px;
  margin: 20px 0;
  border: 1px solid #6fa660;
  background: rgba(111, 166, 96, 0.2);
}
</style>
