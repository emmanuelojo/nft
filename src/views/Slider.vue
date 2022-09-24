<script setup lang="ts">
import { ref, Ref } from "vue";
import { scrollLeft, scrollRight } from "../utils/helpers";

const slideContainer = ref() as Ref<HTMLDivElement>;

const activeSlide = ref(0);

const slideArray = [
  {
    name: "Product 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCC5x9RaPu3k9neN5qI80VJJYdQ6r3SIQ0g&usqp=CAU",
    price: "5.57 ETH",
  },
  {
    name: "Product 2",
    image:
      "https://media.istockphoto.com/photos/blue-female-cyber-with-neon-pink-meta-verse-loading-text-goggles-on-picture-id1369826066?b=1&k=20&m=1369826066&s=170667a&w=0&h=-PIMkF6iIWZ7BAYfgEPfbpDHpM594sR65I-nutBirwI=",
    price: "2.3 ETH",
  },
  {
    name: "Product 3",
    image:
      "https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmZ0JTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    price: "1.6 ETH",
  },
  {
    name: "Product 4",
    image:
      "https://media.istockphoto.com/photos/collage-with-sculpture-of-human-face-in-a-pop-art-style-modern-picture-id1346036903?b=1&k=20&m=1346036903&s=170667a&w=0&h=8Q1FiAikfXkl48Njy2NOTPgehk4cSM-iAAMSCiGNAD0=",
    price: "2.3 ETH",
  },
  {
    name: "Product 5",
    image:
      "https://media.istockphoto.com/photos/abstract-human-face-the-power-of-the-mind-artificial-intelligence-picture-id1357759108?b=1&k=20&m=1357759108&s=170667a&w=0&h=waj8vtZzl8pme3vfLP8OeDSj6uSOyXsk2HzROdH78s4=",
    price: "0.72 ETH",
  },
  {
    name: "Product 6",
    image:
      "https://media.istockphoto.com/photos/non-fungible-tokens-concept-nft-background-concept-crypto-art-picture-id1325894355?b=1&k=20&m=1325894355&s=170667a&w=0&h=o1L9MUb1zNp8P1mVAKePTdtc9Wx306PcdF8aB8nS2RM=",
    price: "0.23 ETH",
  },
  {
    name: "Product 7",
    image:
      "https://images.unsplash.com/photo-1659459007084-15b336c71192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmZ0JTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    price: "1950 KLAY",
  },
  {
    name: "Product 8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RaMwvkFHOq2ec_LHt_HvrTMoqBN-QOWmWw&usqp=CAU",
    price: "< 0.03 ETH",
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

// setInterval(() => {
//   scrollRight(slideContainer.value, 1376);
// }, 3000);

// setInterval(() => {
//   scrollLeft(slideContainer.value, 1376);
// }, 5000);
</script>

<template>
  <div class="pt-16">
    <h1
      class="mx-auto my-10 w-[280px] sm:w-full text-4xl sm:text-[32px] font-bold text-center"
    >
      Explore, collect, and sell NFTs
    </h1>
    <div>
      <div
        class="mx-auto h-[328px] w-[90%] flex md:hidden items-baseline relative rounded-lg"
      >
        <img
          :src="slideArray[activeSlide].image"
          alt="image"
          class="absolute top-0 left-0 right-0 bottom-0 h-full w-full rounded-lg object-cover hover:scale-105"
        />

        <div
          class="w-full px-2 absolute top-1/2 -mt-5 flex justify-between items-center"
        >
          <div
            @click="prevSlide"
            class="w-10 h-10 flex justify-center items-center rounded-full bg-n-transparent-bg text-white cursor-pointer"
          >
            <span class="material-symbols-outlined"> navigate_before </span>
          </div>

          <div
            @click="nextSlide"
            class="w-10 h-10 flex justify-center items-center rounded-full bg-n-transparent-bg text-white cursor-pointer"
          >
            <span class="material-symbols-outlined"> navigate_next </span>
          </div>
        </div>

        <div class="absolute left-3 bottom-3">
          <p class="text-white font-semibold">
            {{ slideArray[activeSlide].name }}
          </p>
          <p class="text-xs text-white font-medium">
            Floor: {{ slideArray[activeSlide].price }}
          </p>
        </div>
      </div>

      <div
        class="mx-auto h-[328px] w-full hidden md:flex items-baseline relative rounded-lg"
      >
        <div
          class="w-full px-2 absolute top-1/2 -mt-5 flex justify-between items-center"
        >
          <div
            @click="scrollLeft(slideContainer, 1376)"
            class="w-14 h-14 z-50 flex justify-center items-center rounded-full shadow-md hover:shadow-lg bg-white text-black cursor-pointer"
          >
            <span class="material-symbols-outlined text-3xl">
              navigate_before
            </span>
          </div>

          <div
            @click="scrollRight(slideContainer, 1376)"
            class="w-14 h-14 z-50 flex justify-center items-center rounded-full shadow-md hover:shadow-lg bg-white text-black cursor-pointer"
          >
            <span class="material-symbols-outlined text-3xl">
              navigate_next
            </span>
          </div>
        </div>

        <div
          class="grid grid-cols-n-8-fr gap-4 overflow-auto hide-scrollbar w-[1360px] 2xl:w-[1440px] mx-auto"
          ref="slideContainer"
        >
          <div
            v-for="(product, idx) in slideArray"
            :key="idx"
            class="w-[328px] h-[328px] flex flex-grow rounded-2xl overflow-hidden cursor-pointer relative"
          >
            <div>
              <img
                :src="product.image"
                alt="image"
                class="h-full w-[328px] rounded-2xl object-cover hover:scale-105 transition delay-150 duration-300 ease-in"
              />

              <div class="absolute left-3 bottom-3">
                <p class="text-white font-semibold">
                  {{ product.name }}
                </p>
                <p class="text-xs text-white font-medium">
                  Floor: {{ product.price }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
