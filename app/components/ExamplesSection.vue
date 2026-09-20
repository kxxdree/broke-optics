<script setup lang="ts">
import BaseLink from "./UI/BaseLink.vue";

import { gallery } from "~/utils/gallery";
</script>

<template>
  <section class="relative w-full overflow-hidden pt-8 pb-24 border-b border-white/10">
    <div class="max-w-[1920px] mx-auto px-28 flex flex-col lg:flex-row gap-16 items-stretch relative z-10">
      <div class="w-[35%] flex flex-col shrink-0 pt-2">
        <h2 class="text-5xl md:text-[3.5rem] leading uppercase mb-6 font-light tracking-widest">Примеры работ</h2>

        <div class="w-12 h-px bg-[#c19d60] mb-8"></div>

        <p class="text-white/80 text-lg leading-relaxed max-w-lg mb-8">Реальные оправы. Настоящие результаты. Премиальное качество в каждой детали</p>

        <BaseLink class="w-fit mt-auto border-white/50 text-white/80 hover:bg-white/80">
          <span>Смотреть все работы</span>
        </BaseLink>
      </div>

      <ul class="w-full grid grid-cols-2 md:grid-cols-4 gap-1.5">
        <li v-for="photo in gallery" :key="photo.id" class="flex flex-col group">
          <div class="w-full aspect-square rounded border border-white/40 flex items-center justify-center">
            <img :src="photo.path" class="w-full h-full object-cover" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
