<script setup lang="ts">
import BaseButton from "./UI/BaseButton.vue";
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import InstagramIcon from "~/assets/icons/instagram-icon.svg?component";
import AvitoIcon from "~/assets/icons/avito-icon.svg?component";
</script>

<template>
  <header class="w-full border-b border-white/10 relative z-20">
    <div class="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 text-xs">LOGO</div>
        <div class="flex flex-col">
          <span class="text-white text-xl tracking-[0.2em] uppercase">Broke</span>
          <span class="text-gray-400 text-xs tracking-[0.4em] uppercase">Optics</span>
        </div>
      </div>

      <div class="flex items-center gap-10">
        <div class="flex items-center gap-8 text-white/60">
          <a href="#" class="hover:text-white transition-colors">
            <TelegramIcon class="w-5 h-5" />
          </a>
          <a href="#" class="hover:text-white transition-colors">
            <InstagramIcon class="w-5 h-5" />
          </a>
          <a href="#" class="hover:text-white transition-colors flex items-center gap-1">
            <AvitoIcon class="w-6 h-6" />
            <span class="block text-md font-bold">Avito</span>
          </a>
        </div>

        <div class="flex flex-col text-white/60 text-sm tracking-wider">
          <span>+7 (999) 999-99-99</span>
          <span>+7 (999) 999-99-99</span>
        </div>

        <BaseButton>Оставить заявку</BaseButton>
      </div>
    </div>
  </header>
</template>
