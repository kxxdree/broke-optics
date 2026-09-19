<script setup lang="ts">
import BaseButton from "~/components/UI/BaseButton.vue";
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
</script>

<template>
  <section class="relative w-full overflow-hidden py-12">
    <!-- Фоновая заглушка для очков (вставь сюда картинку через bg-[url(...)]) -->
    <div class="absolute inset-0 z-0 pointer-events-none"></div>

    <div class="relative z-10 grow flex flex-col justify-center max-w-[1920px] mx-auto px-6 w-full py-12">
      <h1 class="text-white/70 text-lg tracking-[0.45em] uppercase mb-6 font-light">Оптика нового формата</h1>

      <h2 class="text-5xl md:text-[4rem] leading-tight uppercase mb-6 max-w-2xl font-light tracking-widest">
        Меняем линзы<br />
        в вашей оправе<br />
        без переплат
      </h2>

      <div class="w-16 h-px bg-[#c19d60] mb-6"></div>

      <p class="text-gray-300 text-lg leading-normal max-w-md mb-6">
        Изготавливаем линзы по вашему рецепту<br />
        для любых оправ — быстро, точно<br />
        и дешевле сетевых оптик
      </p>

      <div class="flex items-center flex-wrap gap-4 text-[0.85rem] text-white/60 uppercase tracking-widest mb-12">
        <span>Прозрачные</span>
        <span class="text-[#c19d60] text-[8px]">●</span>
        <span>Фотохромные</span>
        <span class="text-[#c19d60] text-[8px]">●</span>
        <span>Тонированные</span>
      </div>

      <div class="flex items-center gap-10">
        <BaseButton>
          <template #icon>
            <TelegramIcon class="w-5 h-5 text-[#c19d60]" />
          </template>
          Отправить рецепт и фото оправы
        </BaseButton>
      </div>
    </div>

    <ul class="relative z-10 w-full mx-auto px-6 pb-12 mt-auto">
      <div class="flex items-start gap-12">
        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/70 text-sm uppercase mb-1 tracking-wide">100%</span>
          <span class="text-white/60 text-[0.575rem] uppercase tracking-widest">Оригинальные линзы</span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/70 text-sm uppercase mb-1 mt-1 tracking-wide">Гарантия</span>
          <span class="text-white/60 text-[0.575rem] uppercase tracking-widest">На все работы</span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/70 text-sm uppercase mb-1 mt-1 tracking-wide">Быстрое</span>
          <span class="text-white/60 text-[0.575rem] uppercase tracking-widest">Изготовление</span>
        </li>

        <li class="flex flex-col border-l border-[#c19d60] pl-4">
          <span class="text-white/70 text-sm uppercase mb-1 mt-1 tracking-wide">Доставка</span>
          <span class="text-white/60 text-[0.575rem] uppercase tracking-widest">По всей Москве и России</span>
        </li>
      </div>
    </ul>
  </section>
</template>
