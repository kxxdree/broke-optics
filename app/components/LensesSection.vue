<script setup lang="ts">
const cards: { num: string; title: string; desc: string; image: string }[] = [
  {
    num: "01",
    title: "Антибликовые линзы",
    desc: "Чистое зрение без бликов и отражений",
    image: "/assets/images/glass-plate.png",
  },
  {
    num: "02",
    title: "Фотохром",
    desc: "Линзы, которые подстраиваются под свет",
    image: "/assets/images/glass-plate.png",
  },
  {
    num: "03",
    title: "Тонкие линзы",
    desc: "Лёгкие, эстетичные и комфортные",
    image: "/assets/images/glass-plate.png",
  },
  {
    num: "04",
    title: "Сложные рецепты",
    desc: "Астигматика, высокие диоптрии, прогрессивные линзы",
    image: "/assets/images/glass-plate.png",
  },
];
</script>

<template>
  <section id="lenses" class="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24 border-b border-white/10">
    <!-- Заглушка для фонового изображения секции -->
    <div class="absolute inset-0 z-0 pointer-events-none"></div>

    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 relative z-10">
      <div class="mb-8 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight uppercase mb-4 sm:mb-6 font-light tracking-wide sm:tracking-widest">
          Изготавливаем<br />
          линзы для вашей оправы
        </h2>

        <div class="w-10 sm:w-12 h-px bg-[#c19d60] mb-4 sm:mb-6"></div>

        <p class="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
          Работаем с любыми оправами - от повседневных до luxury моделей. Подбираем линзы по рецепту и вашим потребностям
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <div
          v-for="card in cards"
          :key="card.num"
          class="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 h-auto lg:h-96 p-4 sm:p-5 lg:pt-8 lg:px-8 bg-white/2 border border-white/10 rounded relative overflow-hidden group transition-colors hover:border-white/20"
        >
          <div class="shrink-0 flex items-center lg:block">
            <span class="text-2xl sm:text-3xl lg:text-4xl font-light text-white lg:mb-4 block relative z-10">
              {{ card.num }}
            </span>
          </div>

          <div class="hidden lg:block w-8 h-px bg-[#c19d60]/50 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#c19d60]"></div>

          <div class="flex-1 relative z-10 min-w-0">
            <h3 class="text-white text-sm tracking-wider sm:tracking-widest uppercase mb-1 sm:mb-1.5 lg:mb-3 whitespace-pre-line leading-snug">
              {{ card.title }}
            </h3>

            <p class="text-white/60 text-sm leading-relaxed">
              {{ card.desc }}
            </p>
          </div>

          <div
            class="hidden lg:flex absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/80 to-transparent z-0 items-center justify-center pointer-events-none"
          >
            <img :src="card.image" class="w-48 h-48 mb-4 object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
