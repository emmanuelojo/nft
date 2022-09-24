<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from "vue";
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";

onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const topOfPage = ref(true);

const position = ref(0);

const handleScroll = (el: any) => {
  position.value = el.target.scrollTop;

  if (el.target.scrollTop === 0) {
    topOfPage.value = true;
  } else {
    topOfPage.value = false;
  }
};

watch(
  [position, topOfPage],
  ([newPosition], [newVal]) => {
    if (newPosition === 0) {
      topOfPage.value = true;
    } else {
      topOfPage.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div @scroll="handleScroll" class="grid h-screen overflow-y-auto">
    <div class="">
      <Navbar
        :class="[topOfPage ? ' bg-transparent' : 'bg-white border-b']"
        :topOfPage="topOfPage"
      />
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
