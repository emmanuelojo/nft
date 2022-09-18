<script setup lang="ts">
import Slider from "./Slider.vue";
import Trending from "./Trending.vue";
import Navbar from "../components/Navbar.vue";
import NewAndNotable from "./NewAndNotable.vue";
import Categories from "./Categories.vue";
</script>

<template>
  <main class="bg-n-blue-gradient-sm sm:bg-n-blue-gradient">
    <!-- <Navbar /> -->
    <Slider />
  </main>
  <Trending />
  <NewAndNotable />
  <Categories />
</template>

<style></style>
