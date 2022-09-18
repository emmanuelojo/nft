<script setup lang="ts">
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="mt-10 bg-n-blue p-6 lg:py-10">
    <div class="flex flex-col gap-3 2xl:max-w-[1024px] lg:mx-auto">
      <div
        class="flex flex-col lg:flex-row lg:justify-evenly lg:w-4/5 lg:mx-auto lg:gap-24"
      >
        <div class="sm:w-4/5 sm:mx-auto lg:mx-0 lg:w-1/2">
          <h3 class="text-white text-xl text-center lg:text-left font-bold">
            Stay in the loop
          </h3>

          <p class="mt-3 text-white text-center lg:text-left">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>

          <form class="mt-5 lg:mt-3 flex justify-center items-center gap-3">
            <input
              type="text"
              placeholder="Your email address"
              class="py-2 px-4 w-[168px] sm:w-full lg:flex lg:flex-grow h-12 rounded-xl placeholder:text-n-gray"
            />

            <button
              type="submit"
              class="w-[122px] h-12 flex justify-center items-center rounded-xl text-white bg-n-blue-sec font-bold"
            >
              Sign up
            </button>
          </form>
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0 flex flex-grow lg:w-1/2">
          <div class="w-full">
            <h3 class="text-white text-xl text-center lg:text-left font-bold">
              Join the community
            </h3>

            <div
              class="mt-4 flex justify-center lg:justify-start items-center gap-2"
            >
              <div
                class="rounded-md p-3 flex justify-center items-center bg-n-blue-sec text-white"
              >
                <span class="material-symbols-outlined"> mail </span>
              </div>

              <div
                class="rounded-md p-3 flex justify-center items-center bg-n-blue-sec text-white"
              >
                <span class="material-symbols-outlined"> smart_display </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-10 h-[0.5px] bg-white w-[95%] sm:w-[80%] mx-auto"></div>

      <div
        class="lg:mt-5 flex flex-col lg:flex-row lg:gap-14 lg:w-[80%] lg:mx-auto"
      >
        <div class="sm:w-[80%] sm:mx-auto lg:mx-0 lg:w-[25%]">
          <div
            class="grid gap-4 justify-center place-content-center lg:place-content-start"
          >
            <img
              src="https://opensea.io/static/images/logos/opensea-white.svg"
              alt="image"
              class="text-[9px] w-10 h-10 mx-auto lg:mx-0"
            />
            <h1 class="text-2xl text-white font-bold">OpenSea</h1>
          </div>

          <p class="mt-3 text-white text-center lg:text-left">
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>

        <div
          class="mt-20 lg:mt-0 pb-16 text-white grid grid-cols-2 lg:flex lg:flex-grow lg:justify-evenly gap-16"
        >
          <div class="flex flex-col gap-4">
            <h3 class="font-semibold text-center lg:text-left">Marketplace</h3>

            <ul class="grid gap-1 lg:gap-3">
              <li class="text-sm text-center lg:text-left cursor-pointer">
                All NFTs
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Solana NFTs
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Art
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Collectibles
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Domain Names
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Music
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Photography
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Sports
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Trading Cards
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Utility
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Virtual Worlds
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-semibold text-center lg:text-left">My Account</h3>

            <ul class="grid gap-1 lg:gap-3">
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Profile
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Favourites
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Watchlist
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                My Collections
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Settings
              </li>
            </ul>

            <div class="mt-4 flex flex-col gap-4">
              <h3 class="font-semibold text-center lg:text-left">Stats</h3>

              <ul class="grid gap-1 lg:gap-3">
                <li class="text-sm text-center lg:text-left cursor-pointer">
                  Rankings
                </li>
                <li class="text-sm text-center lg:text-left cursor-pointer">
                  Activity
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-semibold text-center lg:text-left">Resources</h3>

            <ul class="grid gap-1 lg:gap-3">
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Learn
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Help Center
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Art
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Platform Status
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Partners
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Taxes
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Blog
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Docs
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Newsletter
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-semibold text-center lg:text-left">Company</h3>

            <ul class="grid gap-1 lg:gap-3">
              <li class="text-sm text-center lg:text-left cursor-pointer">
                About
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Careers
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Art
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Ventures
              </li>
              <li class="text-sm text-center lg:text-left cursor-pointer">
                Grants
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="my-6 h-[0.5px] bg-white w-[95%] sm:w-[80%] mx-auto"></div>

      <div
        class="lg:w-[80%] lg:mx-auto flex flex-col lg:flex-row justify-center lg:justify-between gap-3"
      >
        <p class="text-white text-center text-xs">
          &copy; 2018 - {{ currentYear }} Ozone Networks, Inc
        </p>

        <div class="flex justify-center items-center gap-4">
          <p class="text-white text-xs cursor-pointer">Privacy Policy</p>
          <p class="text-white text-xs cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
