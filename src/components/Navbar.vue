<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

interface Props {
  topOfPage: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  topOfPage: true,
});

const topOfPage = ref(true);

const searchAnimation = ref(false);

const handleScroll = () => {
  console.log("I scrolled");
  if (window.pageYOffset > 0) {
    if (topOfPage.value) topOfPage.value = false;
  } else {
    if (!topOfPage.value) topOfPage.value = true;
  }
};
</script>

<template>
  <nav
    class="px-4 w-full h-[72px] flex justify-between items-center gap-8 fixed"
    style="z-index: 1"
  >
    <div class="flex items-center gap-2">
      <img
        src="https://opensea.io/static/images/logos/opensea.svg"
        alt="image"
        class="text-[9px] w-10 h-10"
      />
      <h1 class="text-2xl font-bold">OpenSea</h1>
    </div>

    <div
      class="hidden md:flex p-2 border bg-transparent rounded-xl flex-grow items-center"
    >
      <!-- 
      :class="topOfPage ? 'bg-n-gray' : 'bg-transparent'" -->
      <span class="material-symbols-outlined text-n-gray text-[32px]">
        search
      </span>
      <input
        type="text"
        placeholder="Search items, collections, and accounts"
        class="border-none bg-transparent outline-none placeholder:text-n-gray w-full"
      />
    </div>

    <div class="hidden lg:flex items-center gap-[35px]">
      <p class="text-n-black font-bold">Explore</p>
      <p class="text-n-black font-bold">Stats</p>
      <p class="text-n-black font-bold">Resources</p>
      <p class="text-n-black font-bold">Create</p>

      <div>
        <span class="material-symbols-outlined text-n-black lg:text-3xl">
          account_circle
        </span>
      </div>

      <div>
        <span class="material-symbols-outlined text-n-black lg:text-3xl">
          account_balance_wallet
        </span>
      </div>
    </div>

    <div class="flex items-center gap-2 cursor-pointer lg:hidden">
      <div
        @mouseover="searchAnimation = true"
        @mouseout="searchAnimation = false"
      >
        <!-- <div
          v-if="searchAnimation"
          class="p-2 transition delay-150 border rounded-xl bg-transparent flex-grow items-center"
        >
          <span class="material-symbols-outlined text-n-gray text-[32px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search items, collections, and accounts"
            class="border-none outline-none bg-transparent placeholder:text-n-gray w-full"
          />
        </div>

        <span v-else class="material-symbols-outlined text-[32px] md:hidden">
          search
        </span> -->
        <span class="material-symbols-outlined text-[32px] md:hidden">
          search
        </span>
      </div>
      <span class="material-symbols-outlined text-[32px]"> menu </span>
    </div>
  </nav>
</template>

<style scoped>
.onScroll {
  box-shadow: 0 0 1px #aaa;
  /* background-color: rgba(255, 255, 255, 0.9);
  border-bottom: rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid red;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
}
</style>
