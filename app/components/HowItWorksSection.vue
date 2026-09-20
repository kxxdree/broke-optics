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
  <section class="relative w-full overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16 border-b border-white/10">
    <div
      class="absolute -top-24 sm:-top-48 right-0 sm:right-24 w-96 h-96 sm:w-137.5 sm:h-137.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_35%,transparent_90%)] blur-3xl pointer-events-none z-0"
    ></div>

    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch relative z-10">
      <div class="w-full lg:w-[35%] flex flex-col shrink-0 pt-2">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight uppercase mb-5 sm:mb-6 font-light tracking-wide sm:tracking-widest">
          Как это работает
        </h2>

        <div class="w-10 sm:w-12 h-px bg-[#c19d60] mb-6 sm:mb-8"></div>

        <p class="text-white/80 text-base sm:text-lg leading-relaxed xl:max-w-[20rem] mb-8 sm:mb-10 lg:mb-12">
          Мы делаем процесс максимально простым и понятным для вас
        </p>

        <BaseLink class="mt-0 lg:mt-auto w-full sm:w-auto justify-center">
          <span>Отправить рецепт</span>
        </BaseLink>
      </div>

      <ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6 lg:gap-0">
        <li
          v-for="step in steps"
          :key="step.num"
          class="flex flex-col group lg:border-r lg:border-white/10 rounded p-0 sm:p-4 lg:p-6 xl:p-8 lg:first:pl-0 lg:last:border-0"
        >
          <span class="text-4xl lg:text-[2.5rem] font-light text-white leading-none mb-3 sm:mb-4">
            {{ step.num }}
          </span>

          <div class="w-8 h-px bg-[#c19d60]/50 mb-6 sm:mb-8 transition-all duration-300 group-hover:w-16 group-hover:bg-[#c19d60]"></div>

          <div class="h-48 sm:h-40 lg:h-36 w-full mb-5 sm:mb-6 relative rounded flex overflow-hidden">
            <img :src="step.image" alt="" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          <h3 class="text-white/80 text-base lg:text-[1rem] leading-snug mb-2 sm:mb-3 whitespace-pre-line">
            {{ step.title }}
          </h3>
          <p class="text-white/60 text-sm lg:text-[0.875rem] leading-relaxed whitespace-pre-line">
            {{ step.desc }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
