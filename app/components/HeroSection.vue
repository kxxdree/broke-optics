<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import BaseLink from "./UI/BaseLink.vue";
</script>

<template>
  <section id="hero" class="relative min-h-dvh w-full overflow-hidden flex flex-col">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <img src="/assets/images/bg-hero.jpg" alt="Фон оптики" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/91"></div>
    </div>

    <div class="relative z-10 max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 pt-24 sm:pt-32 xl:pt-40 w-full">
      <h2 class="text-[#c19d60] text-xs sm:text-sm md:text-lg tracking-[0.2em] sm:tracking-[0.45em] uppercase mb-4 font-light">
        Оптика нового формата
      </h2>

      <h1
        class="text-4xl sm:text-5xl md:text-6xl xl:text-[5rem] leading-tight sm:leading-none uppercase mb-6 sm:mb-8 font-light tracking-wide"
      >
        Меняем линзы<br />
        в вашей оправе<br />
        без переплат
      </h1>

      <div class="w-12 sm:w-16 h-px bg-[#c19d60] mb-6"></div>

      <p class="text-gray-300 text-base sm:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10">
        Изготавливаем линзы по вашему рецепту для любых оправ - быстро, точно и дешевле сетевых оптик
      </p>

      <div class="flex items-center flex-wrap gap-3 sm:gap-4 max-sm:text-xs text-[0.95rem] text-white/60 uppercase tracking-widest mb-10 xl:mb-12">
        <span>Прозрачные</span>
        <span class="text-[#c19d60] text-md">●</span>
        <span>Фотохромные</span>
        <span class="text-[#c19d60] text-md">●</span>
        <span>Тонированные</span>
      </div>

      <div class="flex items-center">
        <BaseLink :url="'https://t.me/managebroke'" class="w-full sm:w-auto justify-center">
          <TelegramIcon class="w-4.5 h-4.5 text-[#c19d60] transition-transform group-hover:text-black/80 shrink-0" />
          <span>Отправить рецепт и фото оправы</span>
        </BaseLink>
      </div>
    </div>

    <div class="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 mt-auto py-12 sm:pb-12 sm:pt-16">
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-start gap-8 lg:gap-12">
        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-base sm:text-lg uppercase mb-1 tracking-wide"> 100% </span>
          <span class="text-white/60 text-xs sm:text-sm uppercase tracking-widest"> Оригинальные линзы </span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-base sm:text-lg uppercase mb-1 tracking-wide"> Гарантия </span>
          <span class="text-white/60 text-xs sm:text-sm uppercase tracking-widest"> На все работы </span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-base sm:text-lg uppercase mb-1 tracking-wide"> Быстрое </span>
          <span class="text-white/60 text-xs sm:text-sm uppercase tracking-widest"> Изготовление </span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-base sm:text-lg uppercase mb-1 tracking-wide"> Доставка </span>
          <span class="text-white/60 text-xs sm:text-sm uppercase tracking-widest"> По всей Москве и России </span>
        </li>
      </ul>
    </div>
  </section>
</template>
