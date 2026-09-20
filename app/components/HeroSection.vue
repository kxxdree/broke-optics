<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";

import BaseLink from "./UI/BaseLink.vue";
</script>

<template>
  <section class="relative min-h-dvh w-full overflow-hidden flex flex-col pt-12 border-b border-white/10">
    <!-- Фоновая заглушка -->
    <div class="absolute inset-0 z-0 pointer-events-none"></div>

    <div class="relative z-10 max-w-[1920px] mx-auto px-28 pt-28 w-full">
      <h1 class="text-[#c19d60] text-md tracking-[0.45em] uppercase mb-4 font-light">Оптика нового формата</h1>

      <h2 class="text-5xl md:text-[5rem] leading uppercase mb-6 font-light tracking-wide">
        Меняем линзы<br />
        в вашей оправе<br />
        без переплат
      </h2>

      <div class="w-16 h-px bg-[#c19d60] mb-6"></div>

      <p class="text-gray-300 text-lg leading-normal max-w-xl mb-6">
        Изготавливаем линзы по вашему рецепту для любых оправ — быстро, точно и дешевле сетевых оптик
      </p>

      <div class="flex items-center flex-wrap gap-4 text-[0.75rem] text-white/60 uppercase tracking-widest mb-12">
        <span>Прозрачные</span>
        <span class="text-[#c19d60] text-[0.5rem]">●</span>
        <span>Фотохромные</span>
        <span class="text-[#c19d60] text-[0.5rem]">●</span>
        <span>Тонированные</span>
      </div>

      <div class="flex items-center gap-10">
        <BaseLink>
          <TelegramIcon class="w-4.5 h-4.5 text-[#c19d60] transition-transform group-hover:text-black/80" />
          <span>Отправить рецепт и фото оправы</span>
        </BaseLink>
      </div>
    </div>

    <div class="relative z-10 w-full max-w-[1920px] mx-auto px-28 mt-auto pb-12">
      <ul class="flex items-start gap-12">
        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-lg uppercase mb-1 tracking-wide"> 100% </span>
          <span class="text-white/60 text-sm uppercase tracking-widest"> Оригинальные линзы </span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-lg uppercase mb-1 tracking-wide"> Гарантия </span>
          <span class="text-white/60 text-sm uppercase tracking-widest"> На все работы </span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-lg uppercase mb-1 tracking-wide"> Быстрое </span>
          <span class="text-white/60 text-sm uppercase tracking-widest"> Изготовление </span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/90 text-lg uppercase mb-1 tracking-wide"> Доставка </span>
          <span class="text-white/60 text-sm uppercase tracking-widest"> По всей Москве и России </span>
        </li>
      </ul>
    </div>
  </section>
</template>
