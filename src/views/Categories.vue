<script setup lang="ts">
import { ref } from "vue";

const categories = [
  {
    name: "art",
    image: "https://opensea.io/static/images/categories/art.png",
  },
  {
    name: "collectibles",
    image: "https://opensea.io/static/images/categories/collectibles.png",
  },
  {
    name: "domain names",
    image: "https://opensea.io/static/images/categories/domain-names.png",
  },
  {
    name: "music",
    image: "https://opensea.io/static/images/categories/music.png",
  },
  {
    name: "photography",
    image:
      "https://opensea.io/static/images/categories/photography-category.png",
  },
  {
    name: "sports",
    image: "https://opensea.io/static/images/categories/sports.png",
  },
  {
    name: "trading cards",
    image: "https://opensea.io/static/images/categories/trading-cards.png",
  },
  {
    name: "utility",
    image: "https://opensea.io/static/images/categories/utility.png",
  },
  {
    name: "virtual worlds",
    image: "https://opensea.io/static/images/categories/virtual-worlds.png",
  },
];
</script>

<template>
  <div
    class="mt-10 p-4 md:px-6 lg:px-10 grid gap-5 2xl:max-w-[1024px] lg:flex lg:flex-col 2xl:mx-auto"
  >
    <h1 class="text-n-black text-xl font-bold">Browse by category</h1>

    <div class="grid lg:grid-cols-3 gap-6">
      <div
        v-for="(category, idx) in categories"
        :key="idx"
        class="w-full h-max rounded-lg shadow-md cursor-pointer"
      >
        <img
          :src="category.image"
          alt="image"
          class="h-[85%] sm:w-full sm:object-cover text-[9px] rounded-t-lg"
        />
        <p class="py-4 text-center text-n-black font-bold capitalize">
          {{ category.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
