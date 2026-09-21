<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import InstagramIcon from "~/assets/icons/instagram-icon.svg?component";
import AvitoIcon from "~/assets/icons/avito-icon.svg?component";

import BaseLink from "./UI/BaseLink.vue";
</script>

<template>
  <header class="w-full border-b border-white/10 absolute z-20">
    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
      <div class="flex items-center gap-3 sm:gap-4">
        <div
          class="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 text-[10px] sm:text-xs"
        >
          LOGO
        </div>
        <div class="flex flex-col">
          <span class="text-white text-lg sm:text-xl tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-none">Broke</span>
          <span class="text-gray-400 text-[0.65rem] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-0.5 sm:mt-1">Optics</span>
        </div>
      </div>

      <div class="flex items-center gap-5 lg:gap-10">
        <div class="flex items-center gap-4 sm:gap-6 lg:gap-8 text-white/60">
          <nuxt-link href="https://t.me/+nyWSSt-ICKo3ZjJi" target="_blank" class="hover:text-white transition-colors">
            <TelegramIcon class="w-5 h-5 lg:w-6 lg:h-6" />
          </nuxt-link>

          <nuxt-link href="https://www.instagram.com/broke.optics" target="_blank" class="hover:text-white transition-colors">
            <InstagramIcon class="w-5 h-5 lg:w-6 lg:h-6" />
          </nuxt-link>

          <nuxt-link href="#" target="_blank" class="hover:text-white transition-colors flex items-center gap-1.5">
            <AvitoIcon class="w-6 h-6 lg:w-7 lg:h-7" />

            <span class="hidden sm:block text-sm lg:text-md font-bold">Avito</span>
          </nuxt-link>
        </div>

        <div class="hidden lg:block w-px h-8 bg-white/30"></div>

        <div class="hidden lg:flex flex-col text-white/60 text-xs xl:text-sm tracking-wider">
          <a href="tel:+79999999999" class="hover:text-white transition-colors">+7 (999) 999-99-99</a>
          <a href="tel:+79999999999" class="hover:text-white transition-colors">+7 (999) 999-99-99</a>
        </div>

        <BaseLink :url="'https://t.me/managebroke'" class="hidden lg:flex">
          <span>Оставить заявку</span>
        </BaseLink>
      </div>
    </div>
  </header>
</template>
