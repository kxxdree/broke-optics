<script setup lang="ts">
import BaseButton from "~/components/UI/BaseButton.vue";
</script>

<template>
  <section class="relative w-full overflow-hidden pb-12">
    <!-- Фоновая заглушка для очков (вставь сюда картинку через bg-[url(...)]) -->
    <div class="absolute inset-0 z-0 pointer-events-none"></div>

    <div class="relative z-10 grow flex flex-col justify-center max-w-7xl mx-auto px-6 w-full py-12">
      <h1 class="text-gray-400 text-lg tracking-[0.3em] uppercase mb-6 font-light">Премиальная оптика нового формата</h1>

      <h2 class="text-5xl md:text-[4rem] leading-tight uppercase mb-6 max-w-2xl font-light tracking-widest">
        Меняем линзы<br />
        в вашей оправе<br />
        без переплат
      </h2>

      <div class="w-16 h-px bg-[#c19d60] mb-6"></div>

      <p class="text-gray-300 text-lg leading-normal max-w-md mb-6">
        Изготавливаем линзы по вашему рецепту<br />
        для любых оправ — быстро, точно<br />
        и дешевле сетевых оптик.
      </p>

      <div class="flex items-center flex-wrap gap-4 text-[0.85rem] text-gray-400 uppercase tracking-widest mb-12">
        <span>Антиблик</span>
        <span class="text-[#c19d60] text-[8px]">●</span>
        <span>Фотохром</span>
        <span class="text-[#c19d60] text-[8px]">●</span>
        <span>Астигматика</span>
        <span class="text-[#c19d60] text-[8px]">●</span>
        <span>Тонкие линзы</span>
      </div>

      <div class="flex items-center gap-10">
        <BaseButton>
          <template #icon>
            <svg class="w-4 h-4 text-[#c19d60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </template>
          Отправить рецепт
        </BaseButton>

        <a href="#" class="flex items-center gap-3 text-white text-[13px] uppercase tracking-widest hover:text-[#c19d60] duration-300">
          Рассчитать стоимость
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>

    <ul class="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 mt-auto">
      <div class="flex items-start gap-12">
        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-gray-400 text-sm uppercase mb-1 tracking-wide">100%</span>
          <span class="text-gray-500 text-[0.575rem] uppercase tracking-widest">Оригинальные линзы</span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-gray-400 text-sm uppercase mb-1 mt-1 tracking-wide">Гарантия</span>
          <span class="text-gray-500 text-[0.575rem] uppercase tracking-widest">На все работы</span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-gray-400 text-sm uppercase mb-1 mt-1 tracking-wide">Быстрое</span>
          <span class="text-gray-500 text-[0.575rem] uppercase tracking-widest">Изготовление</span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-gray-400 text-sm uppercase mb-1 mt-1 tracking-wide">Доставка</span>
          <span class="text-gray-500 text-[0.575rem] uppercase tracking-widest">По всей России</span>
        </li>
      </div>
    </ul>
  </section>
</template>
