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
  <section
    class="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10"
  >
    <!-- Заглушка для фонового изображения секции. Замени на свой bg-[url('...')] -->
    <div class="absolute inset-0 z-0 pointer-events-none"></div>

    <div
      class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 relative z-10"
    >
      <div class="mb-10 sm:mb-12">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight uppercase mb-5 sm:mb-6 font-light tracking-wide sm:tracking-widest"
        >
          Изготавливаем<br />
          линзы для вашей оправы
        </h2>

        <div class="w-10 sm:w-12 h-px bg-[#c19d60] mb-5 sm:mb-6"></div>

        <p class="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg">
          Работаем с любыми оправами - от повседневных до luxury моделей.
          Подбираем линзы по рецепту и вашим потребностям
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <div
          v-for="card in cards"
          :key="card.num"
          class="flex flex-col min-h-70 sm:min-h-80 lg:h-96 bg-white/2 border border-white/10 rounded pt-6 px-6 sm:pt-8 sm:px-8 relative overflow-hidden group"
        >
          <span
            class="text-3xl sm:text-4xl font-light text-white mb-4 relative z-10"
          >
            {{ card.num }}
          </span>

          <div
            class="w-8 h-px bg-[#c19d60]/50 mb-6 sm:mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#c19d60]"
          ></div>

          <h3
            class="text-white text-sm tracking-widest uppercase mb-3 sm:mb-4 whitespace-pre-line leading-relaxed relative z-10"
          >
            {{ card.title }}
          </h3>

          <p
            class="text-white/60 max-lg:text-sm leading-relaxed whitespace-pre-line relative z-10"
          >
            {{ card.desc }}
          </p>

          <div
            class="absolute bottom-0 left-0 right-0 h-3/5 sm:h-1/2 bg-linear-to-t from-black/80 to-transparent z-0 flex items-center justify-center"
          >
            <img
              :src="card.image"
              class="w-50 h-50 mb-4 object-cover opacity-40 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
