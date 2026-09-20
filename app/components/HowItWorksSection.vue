<script setup lang="ts">
import BaseLink from "./UI/BaseLink.vue";

const steps: { num: string; title: string; desc: string; image: string }[] = [
  {
    num: "01",
    title: "Отправляете рецепт и фото оправы",
    desc: "Любым удобным способом",
    image: "/assets/images/lens.jpg",
  },
  {
    num: "02",
    title: "Подбираем линзы и рассчитываем стоимость",
    desc: "Согласовываем с вами детали",
    image: "/assets/images/lens.jpg",
  },
  {
    num: "03",
    title: "Изготавливаем ваши линзы",
    desc: "Точно по рецепту на профессиональном оборудовании",
    image: "/assets/images/lens.jpg",
  },
  {
    num: "04",
    title: "Отправляем готовые очки",
    desc: "Надёжная упаковка и быстрая доставка",
    image: "/assets/images/lens.jpg",
  },
];
</script>

<template>
  <section class="relative w-full overflow-hidden pt-24 pb-8 border-b border-white/10">
    <div
      class="absolute -top-48 right-24 w-137.5 h-137.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_35%,transparent_90%)] blur-3xl pointer-events-none z-0"
    ></div>

    <div class="max-w-[1920px] mx-auto px-28 flex flex-col lg:flex-row gap-16 items-stretch relative z-10">
      <div class="w-[35%] flex flex-col shrink-0 pt-2">
        <h2 class="text-5xl md:text-[3.5rem] leading uppercase mb-6 font-light tracking-widest">Как это работает</h2>

        <div class="w-12 h-px bg-[#c19d60] mb-8"></div>

        <p class="text-white/80 text-lg leading-relaxed max-w-[20rem] mb-8">Мы делаем процесс максимально простым и понятным для вас</p>

        <BaseLink class="mt-auto">
          <span>Отправить рецепт</span>
        </BaseLink>
      </div>

      <ul class="w-full grid grid-cols-4">
        <li v-for="step in steps" :key="step.num" class="flex flex-col group border-r border-white/10 rounded p-4 last-of-type:border-0">
          <span class="text-[2.5rem] font-light text-white leading-none mb-4">
            {{ step.num }}
          </span>

          <div class="w-8 h-px bg-[#c19d60]/50 mb-8 transition-all duration-300 group-hover:w-16 group-hover:bg-[#c19d60]"></div>

          <div class="h-36 w-full mb-6 relative rounded flex">
            <img :src="step.image" alt="" class="max-h-full w-full object-cover" />
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
