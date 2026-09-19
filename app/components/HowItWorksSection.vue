<script setup lang="ts">
import BaseButton from "./UI/BaseButton.vue";
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";

const steps: { num: string; title: string; desc: string; image: string }[] = [
  {
    num: "01",
    title: "Отправляете рецепт и фото оправы",
    desc: "Любым удобным способом",
    image: "/path-to-step-1.png",
  },
  {
    num: "02",
    title: "Подбираем линзы и рассчитываем стоимость",
    desc: "Согласовываем с вами детали",
    image: "/path-to-step-2.png",
  },
  {
    num: "03",
    title: "Изготавливаем ваши линзы",
    desc: "Точно по рецепту на профессиональном оборудовании",
    image: "/path-to-step-3.png",
  },
  {
    num: "04",
    title: "Отправляем готовые очки",
    desc: "Надёжная упаковка и быстрая доставка",
    image: "/path-to-step-4.png",
  },
];
</script>

<template>
  <section class="relative w-full py-12 bg-[#070707] text-white overflow-hidden border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-stretch relative z-10">
      <div class="w-[30%] flex flex-col shrink-0 pt-2">
        <h2 class="text-5xl md:text-[4rem] leading-[1.1] uppercase mb-6 font-light tracking-widest">Как это<br />работает</h2>

        <div class="w-12 h-px bg-[#c19d60] mb-8"></div>

        <p class="text-white/80 text-lg leading-relaxed max-w-[20rem] mb-8">Мы делаем процесс максимально простым и понятным для вас</p>

        <BaseButton class="w-fit mt-auto">
          <template #icon>
            <TelegramIcon class="w-5 h-5 text-[#c19d60]" />
          </template>
          Отправить рецепт
        </BaseButton>
      </div>

      <ul class="w-full grid grid-cols-4">
        <li v-for="step in steps" :key="step.num" class="flex flex-col group border-r border-white/10 rounded p-4 last-of-type:border-0">
          <span class="text-[2.5rem] font-light text-white leading-none mb-4">
            {{ step.num }}
          </span>

          <div class="w-8 h-px bg-[#c19d60]/50 mb-8 transition-all duration-300 group-hover:w-16 group-hover:bg-[#c19d60]"></div>

          <div class="h-36 w-full mb-6 relative rounded flex items-center justify-start">
            <!-- Заглушка. Когда появятся реальные картинки, замени этот div на:
                  <img :src="step.image" alt="" class="max-h-full object-contain" />
             -->
          </div>

          <h3 class="text-white/80 text-[1rem] leading-snug mb-3 whitespace-pre-line">
            {{ step.title }}
          </h3>
          <p class="text-white/60 text-[0.875rem] leading-relaxed whitespace-pre-line">
            {{ step.desc }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
