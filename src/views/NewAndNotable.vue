<script setup lang="ts">
import { ref } from "vue";

const activeSlide = ref(0);

const slideArray = [
  {
    name: "renga",
    price: "1.58 ETH",
    verified: true,
    stock: "1,871 ETH",
    percentage: "+253%",
    image:
      "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
  },
  {
    name: "renga",
    price: "1.58 ETH",
    verified: true,
    stock: "1,871 ETH",
    percentage: "+253%",
    image:
      "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?w=500&auto=format",
  },
  {
    name: "SAN Origin",
    price: "0.06 ETH",
    verified: false,
    stock: "164 ETH",
    image:
      "https://i.seadn.io/gae/0Foe4yssdIPOMhk40E4fgrwViERyCUAGoAhPXa4QVFbWyaUR4pL5IcUU7RYvtBojiDn5OZqLZEb885oNmpFor-RRFdtOIobLw0aUSw?w=500&auto=format",
  },
  {
    name: "tamagogi",
    price: "0.05 ETH",
    verified: false,
    stock: "93 ETH",
    image:
      "https://i.seadn.io/gcs/files/9ea49eb9e3f330409176c147945094aa.png?w=500&auto=format",
  },
  {
    name: "RENGA Black Box",
    price: "2.62 ETH",
    verified: true,
    stock: "597 ETH",
    image:
      "https://i.seadn.io/gcs/files/c6607f30698fec56931320239d63b690.gif?w=500&auto=format",
  },
  {
    name: "The Art of Seasons",
    price: "0.28 ETH",
    verified: true,
    stock: "413 ETH",
    image:
      "https://i.seadn.io/gae/wRpNOK_6qKV-cdvagJbo-7KBtHpU64X2IQXzEvyx8gTIy3MRlzyAuCJ87Hjf3wErneE8vrViwDLLz3fdyTSYEAmAMug1SqdGe7p9djQ?w=500&auto=format",
  },
  {
    name: "SAN Origin",
    price: "0.06 ETH",
    verified: false,
    stock: "164 ETH",
    image:
      "https://i.seadn.io/gae/0Foe4yssdIPOMhk40E4fgrwViERyCUAGoAhPXa4QVFbWyaUR4pL5IcUU7RYvtBojiDn5OZqLZEb885oNmpFor-RRFdtOIobLw0aUSw?w=500&auto=format",
  },
  {
    name: "tamagogi",
    price: "0.05 ETH",
    verified: false,
    stock: "93 ETH",
    image:
      "https://i.seadn.io/gcs/files/9ea49eb9e3f330409176c147945094aa.png?w=500&auto=format",
  },
];

const prevSlide = () => {
  if (activeSlide.value === 0) {
    activeSlide.value = slideArray.length - 1;
  } else {
    activeSlide.value--;
  }
};

const nextSlide = () => {
  if (activeSlide.value < slideArray.length) activeSlide.value++;
  if (activeSlide.value === 8) activeSlide.value = 0;
  if (activeSlide.value > slideArray.length - 1) activeSlide.value = 0;
};

const currentSlide = (n: number) => {
  activeSlide.value = n;
};

setInterval(() => {
  activeSlide.value++;
  if (activeSlide.value === 4) activeSlide.value = 0;
}, 10000);
</script>

<template>
  <div class="mt-10 px-4 grid gap-5">
    <h3 class="font-bold text-xl text-n-black">New and notable</h3>
    <div>
      <div
        class="mx-auto h-[314px] sm:h-[350px] w-[90%] sm:w-full flex items-baseline relative rounded-lg shadow-sm bg-white"
      >
        <img
          :src="slideArray[activeSlide].image"
          alt="image"
          class="absolute top-0 left-0 right-0 bottom-0 h-[225px] sm:h-[70%] w-full rounded-t-lg object-cover"
        />

        <div
          class="w-full px-2 absolute top-1/2 flex justify-between items-center"
        >
          <div
            @click="prevSlide"
            class="w-10 h-10 flex justify-center items-center rounded-full bg-n-black-10% text-white"
          >
            <span class="material-symbols-outlined"> navigate_before </span>
          </div>

          <div
            @click="nextSlide"
            class="w-10 h-10 flex justify-center items-center rounded-full bg-n-black-10% text-white"
          >
            <span class="material-symbols-outlined"> navigate_next </span>
          </div>
        </div>

        <div
          class="p-2 h-12 w-12 absolute left-3 top-[65%] border-[4px] border-white rounded-lg"
        >
          <img
            :src="slideArray[activeSlide].image"
            alt="image"
            class="absolute top-0 left-0 right-0 bottom-0 h-full w-full rounded-t-lg object-cover"
          />
        </div>

        <div class="absolute left-3 bottom-5 flex items-center gap-1">
          <p class="capitalize font-bold text-n-black">
            {{ slideArray[activeSlide].name }}
          </p>
          <span
            v-if="slideArray[activeSlide].verified"
            class="material-symbols-outlined text-blue-500"
          >
            verified
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
