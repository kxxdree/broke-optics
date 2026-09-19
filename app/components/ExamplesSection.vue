<script setup lang="ts">
import BaseButton from "./UI/BaseButton.vue";

const steps = [
  { num: "01", title: "Работа 1", desc: "Описание работы" },
  { num: "02", title: "Работа 2", desc: "Описание работы" },
  { num: "03", title: "Работа 3", desc: "Описание работы" },
  { num: "04", title: "Работа 4", desc: "Описание работы" },
  { num: "05", title: "Работа 5", desc: "Описание работы" },
  { num: "06", title: "Работа 6", desc: "Описание работы" },
  { num: "07", title: "Работа 7", desc: "Описание работы" },
  { num: "08", title: "Работа 8", desc: "Описание работы" },
];
</script>

<template>
  <section class="relative w-full overflow-hidden pt-8 pb-24 border-b border-white/10">
    <div class="max-w-[1920px] mx-auto px-28 flex flex-col lg:flex-row gap-16 items-stretch relative z-10">
      <!-- Левая часть -->
      <div class="w-[35%] flex flex-col shrink-0 pt-2">
        <h2 class="text-5xl md:text-[3.5rem] leading uppercase mb-6 font-light tracking-widest">Примеры работ</h2>

        <div class="w-12 h-px bg-[#c19d60] mb-8"></div>

        <p class="text-white/80 text-lg leading-relaxed max-w-lg mb-8">Реальные оправы. Настоящие результаты. Премиальное качество в каждой детали</p>

        <BaseButton class="w-fit mt-auto border-white/50 text-white/80 hover:bg-white/80"> Смотреть все работы </BaseButton>
      </div>

      <ul class="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        <li v-for="step in steps" :key="step.num" class="flex flex-col group">
          <div class="w-full aspect-square rounded border border-white/10 bg-white/5 flex items-center justify-center">
            <span class="text-white/20 text-sm uppercase tracking-widest"> Фото </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
