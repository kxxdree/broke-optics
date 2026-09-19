<script setup lang="ts">
import BoxIcon from "~/assets/icons/box-icon.svg?component";
import DeliveryIcon from "~/assets/icons/delivery-icon.svg?component";
import ShieldIcon from "~/assets/icons/shield-icon.svg?component";
import HeadphonesIcon from "~/assets/icons/headphones-icon.svg?component";
import LocationIcon from "~/assets/icons/location-icon.svg?component";

const deliveryFeatures = [
  {
    icon: DeliveryIcon,
    title: "Любые службы доставки",
    desc: "СДЭК, Почта России, Авито Доставка",
  },
  {
    icon: BoxIcon,
    title: "Надёжная упаковка",
    desc: "Специальная упаковка и защита оправы",
  },
  {
    icon: LocationIcon,
    title: "Отслеживание отправления",
    desc: "Вы всегда знаете, где находится ваша посылка",
  },
  {
    icon: HeadphonesIcon,
    title: "Поддержка на всех этапах",
    desc: "Помогаем и отвечаем на каждом этапе доставки",
  },
];
</script>

<template>
  <section class="relative w-full py-24 overflow-hidden">
    <!-- Фоновое изображение (Коробка и очки). 
         Вставь сюда класс bg-[url('...')] с твоей картинкой -->
    <div class="absolute top-0 right-0 z-0 pointer-events-none"></div>

    <div class="max-w-[1920px] mx-auto px-36 relative z-10 flex flex-col gap-16">
      <div class="flex flex-col lg:flex-row gap-16 items-start">
        <div class="w-full flex flex-col">
          <h2 class="text-5xl md:text-[3.5rem] leading uppercase mb-6 font-light tracking-widest">
            Доставка <br />
            по всей России
          </h2>

          <div class="w-12 h-px bg-[#c19d60] mb-6"></div>

          <p class="text-gray-300 text-lg leading-relaxed max-w-xl mb-12">Берём на себя все заботы по доставке. Ваша оправа будет в полной безопасности</p>

          <ul class="w-full grid grid-cols-4 gap-4">
            <li
              v-for="(feat, index) in deliveryFeatures"
              :key="index"
              class="bg-white/2 border border-white/10 rounded p-6 flex flex-col transition-colors hover:border-white/20"
            >
              <component :is="feat.icon" class="w-8 h-8 text-[#c19d60] mb-6" />

              <h3 class="text-sm text-white font-semibold uppercase tracking-widest mb-3 whitespace-pre-line">
                {{ feat.title }}
              </h3>

              <p class="text-[0.875rem] text-white/80 leading-relaxed whitespace-pre-line">
                {{ feat.desc }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full bg-white/2 border border-white/10 rounded-lg py-8 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div class="flex items-center gap-6 shrink-0 w-full lg:w-auto justify-center lg:justify-start">
          <ShieldIcon class="w-12 h-12 text-[#c19d60]" />
          <h3 class="text-lg lg:text-[22px] uppercase tracking-widest font-light whitespace-nowrap">Ваша оправа -<br />наша ответственность</h3>
        </div>

        <div class="hidden lg:block w-px h-16 bg-[#c19d60] shrink-0"></div>

        <p class="text-white/80 text-sm lg:text-base text-center lg:text-left max-w-sm">Мы упаковываем каждую оправу так, как будто это наша собственная</p>

        <a
          href="#"
          class="shrink-0 flex items-center justify-center w-full lg:w-auto gap-4 px-8 py-5 border border-[#c19d60]/30 text-[#c19d60] text-sm uppercase tracking-widest hover:bg-[#c19d60] hover:text-black hover:border-[#c19d60] transition-all duration-300 rounded group"
        >
          Как мы упаковываем
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
