<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="grid h-screen overflow-y-auto">
    <div class="">
      <Navbar />
      <!-- <router-view /> -->
      <Home />
    </div>
    <Footer />
  </div>
</template>

<style></style>

<!-- <script setup lang="ts"></script>

<template>
  <div></div>
</template>

<style></style> -->
