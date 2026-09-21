<script setup lang="ts">
import BaseLink from "./UI/BaseLink.vue";
import { gallery } from "~/utils/gallery";
</script>

<template>
  <section id="examples" class="relative w-full overflow-hidden pt-8 pb-16 sm:pb-20 lg:pb-24 border-b border-white/10">
    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch relative z-10">
      <div class="w-full lg:w-[35%] flex flex-col shrink-0 pt-2">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight uppercase mb-5 sm:mb-6 font-light tracking-wide sm:tracking-widest">
          Примеры работ
        </h2>

        <div class="w-10 sm:w-12 h-px bg-[#c19d60] mb-6 sm:mb-8"></div>

        <p class="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg mb-8 sm:mb-10 lg:mb-8">
          Реальные оправы. Настоящие результаты. Премиальное качество в каждой детали
        </p>

        <BaseLink
          :url="'https://www.instagram.com/broke.optics'"
          class="w-full sm:w-auto justify-center mt-0 lg:mt-auto border-white/50 text-white/80 hover:bg-white/80 hover:text-black transition-colors"
        >
          <span>Смотреть все работы</span>
        </BaseLink>
      </div>

      <ul class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <li v-for="photo in gallery" :key="photo.id" class="flex flex-col group cursor-pointer">
          <div class="w-full aspect-square rounded border border-white/20 sm:border-white/40 flex items-center justify-center overflow-hidden">
            <img :src="photo.path" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
