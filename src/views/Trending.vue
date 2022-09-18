<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref("Trending");

const tabs = ["Trending", "Top"];

const nfts = [
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
    name: "renga",
    price: "1.58 ETH",
    verified: true,
    stock: "1,871 ETH",
    percentage: "+253%",
    image:
      "https://i.seadn.io/gcs/files/c6607f30698fec56931320239d63b690.gif?w=500&auto=format",
  },
  {
    name: "renga",
    price: "1.58 ETH",
    verified: false,
    stock: "1,871 ETH",
    percentage: "+253%",
    image:
      "https://i.seadn.io/gae/wRpNOK_6qKV-cdvagJbo-7KBtHpU64X2IQXzEvyx8gTIy3MRlzyAuCJ87Hjf3wErneE8vrViwDLLz3fdyTSYEAmAMug1SqdGe7p9djQ?w=500&auto=format",
  },
  {
    name: "renga",
    price: "1.58 ETH",
    verified: false,
    stock: "1,871 ETH",
    percentage: "+253%",
    image:
      "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?w=500&auto=format",
  },
  {
    name: "RENGA",
    price: "1.50 ETH",
    verified: true,
    stock: "1,871 ETH",
    percentage: "+253%",
    image:
      "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?w=500&auto=format",
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
</script>

<template>
  <div class="px-4 mt-10">
    <div
      class="w-full flex justify-between items-center gap-4 border-b-[0.1px] border-b-gray-400"
    >
      <div class="flex justify-between items-center gap-4">
        <div
          v-for="(tab, idx) in tabs"
          :key="idx"
          class="pb-[14px] cursor-pointer"
          :class="
            activeTab === tab
              ? 'text-n-black border-b-2 border-b-black'
              : 'text-n-gray border-b-2 border-b-transparent'
          "
          @click="activeTab = tab"
        >
          <h3 class="text-xl font-bold">{{ tab }}</h3>
        </div>
      </div>

      <div class="flex justify-between items-center gap-3">
        <select
          class="mb-2 py-[6px] px-3 border-2 border-n-gray-sec rounded-xl text-sm text-n-gray font-bold"
        >
          <option value="" class="">24h</option>
          <option value="" class="">7d</option>
          <option value="" class="">30d</option>
          <option value="" class="">All</option>
        </select>

        <button
          @click="activeTab = 'All'"
          class="mb-2 py-[6px] px-3 border-2 border-n-gray-sec rounded-xl text-sm text-n-black font-bold"
        >
          View all
        </button>
      </div>
    </div>

    <div class="mt-4 grid gap-3">
      <div class="flex justify-between items-center">
        <p class="text-n-gray text-xs font-bold uppercase">collection</p>
        <p class="text-n-gray text-xs font-bold uppercase">volume</p>
      </div>

      <div v-if="activeTab === 'Trending'" class="flex flex-col gap-4 sm:gap-6">
        <div
          v-for="(product, idx) in nfts.slice(-5)"
          :key="idx"
          class="flex items-center gap-3 sm:gap-6"
        >
          <p class="text-sm text-n-gray font-bold sm:text-xl">{{ idx + 1 }}</p>

          <div class="flex flex-grow justify-between items-center">
            <div class="flex items-center gap-2 sm:gap-3">
              <img
                :src="product.image"
                alt="image"
                class="text-[9px] h-[52px] w-[52px] object-cover rounded-lg"
              />

              <div>
                <div class="flex items-center gap-1">
                  <p class="capitalize font-bold">{{ product.name }}</p>
                  <span
                    v-if="product.verified"
                    class="material-symbols-outlined text-blue-500"
                  >
                    verified
                  </span>
                </div>
                <p class="text-xs flex items-center text-n-gray">
                  <span class="font-medium">Floor:</span>
                  <span class="font-bold"> {{ product.price }}</span>
                </p>
              </div>
            </div>

            <div class="text-right">
              <p class="text-sm font-bold">{{ product.stock }}</p>
              <p class="text-xs text-n-green font-bold">
                {{ product.percentage }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'Top'" class="flex flex-col gap-4 sm:gap-6">
        <div
          v-for="(product, idx) in nfts.slice(0, 5)"
          :key="idx"
          class="flex items-center gap-3 sm:gap-6"
        >
          <p class="text-sm text-n-gray font-bold sm:text-xl">{{ idx + 1 }}</p>

          <div class="flex flex-grow justify-between items-center">
            <div class="flex items-center gap-2 sm:gap-3">
              <img
                :src="product.image"
                alt="image"
                class="text-[9px] h-[52px] w-[52px] object-cover rounded-lg"
              />

              <div>
                <div class="flex items-center gap-1">
                  <p class="capitalize font-bold">{{ product.name }}</p>
                  <span
                    v-if="product.verified"
                    class="material-symbols-outlined text-blue-500"
                  >
                    verified
                  </span>
                </div>
                <p class="text-xs flex items-center text-n-gray">
                  <span class="font-medium">Floor:</span>
                  <span class="font-bold"> {{ product.price }}</span>
                </p>
              </div>
            </div>

            <div class="text-right">
              <p class="text-sm font-bold">{{ product.stock }}</p>
              <p class="text-xs text-n-green font-bold">
                {{ product.percentage }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'All'" class="flex flex-col gap-4 sm:gap-6">
        <div
          v-for="(product, idx) in nfts"
          :key="idx"
          class="flex items-center gap-3 sm:gap-6"
        >
          <p class="text-sm text-n-gray font-bold sm:text-xl">{{ idx + 1 }}</p>

          <div class="flex flex-grow justify-between items-center">
            <div class="flex items-center gap-2 sm:gap-3">
              <img
                :src="product.image"
                alt="image"
                class="text-[9px] h-[52px] w-[52px] object-cover rounded-lg"
              />

              <div>
                <div class="flex items-center gap-1">
                  <p class="capitalize font-bold">{{ product.name }}</p>
                  <span
                    v-if="product.verified"
                    class="material-symbols-outlined text-blue-500"
                  >
                    verified
                  </span>
                </div>
                <p class="text-xs flex items-center text-n-gray">
                  <span class="font-medium">Floor:</span>
                  <span class="font-bold"> {{ product.price }}</span>
                </p>
              </div>
            </div>

            <div class="text-right">
              <p class="text-sm font-bold">{{ product.stock }}</p>
              <p class="text-xs text-n-green font-bold">
                {{ product.percentage }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
