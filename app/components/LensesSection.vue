<script setup lang="ts">
const cards: { num: string; title: string; desc: string; image: string }[] = [
  {
    num: "01",
    title: "Антибликовые линзы",
    desc: "Чистое зрение без бликов и отражений",
    image: "/path-to-lens-1.jpg",
  },
  {
    num: "02",
    title: "Фотохром",
    desc: "Линзы, которые подстраиваются под свет",
    image: "/path-to-lens-2.jpg",
  },
  {
    num: "03",
    title: "Тонкие линзы",
    desc: "Лёгкие, эстетичные и комфортные",
    image: "/path-to-lens-3.jpg",
  },
  {
    num: "04",
    title: "Сложные рецепты",
    desc: "Астигматика, высокие диоптрии, прогрессивные линзы",
    image: "/path-to-lens-4.jpg",
  },
];
</script>

<template>
  <section class="relative w-full overflow-hidden pb-12">
    <!-- Заглушка для фонового изображения секции. Замени на свой bg-[url('...')] -->
    <div class="absolute inset-0 z-0 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="mb-12">
        <h2 class="text-5xl md:text-[4rem] leading-tight uppercase mb-6 font-light tracking-widest">
          Изготавливаем<br />
          линзы для вашей оправы
        </h2>

        <div class="w-12 h-px bg-[#c19d60] mb-6"></div>

        <p class="text-white/80 text-lg leading-normal max-w-lg">
          Работаем с любыми оправами — от повседневных до luxury моделей. Подбираем линзы по рецепту и вашим потребностям
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="card in cards" :key="card.num" class="flex flex-col h-95 bg-white/2 border border-white/10 rounded pt-8 px-8 relative overflow-hidden">
          <span class="text-4xl font-light text-white mb-6">
            {{ card.num }}
          </span>

          <h3 class="text-white text-sm tracking-widest uppercase mb-4 whitespace-pre-line leading-relaxed">
            {{ card.title }}
          </h3>

          <p class="text-white/60 text-xs leading-relaxed whitespace-pre-line z-10 relative">
            {{ card.desc }}
          </p>

          <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/60 to-transparent z-0">
            <!-- Пример: <img :src="card.image" class="w-full h-full object-cover opacity-80" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
