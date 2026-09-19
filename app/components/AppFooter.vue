<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import InstagramIcon from "~/assets/icons/instagram-icon.svg?component";
import AvitoIcon from "~/assets/icons/avito-icon.svg?component";

import { h } from "vue";

const infoLinks = ["Что мы делаем", "Почему у нас дешевле", "Как мы работаем", "Примеры работ", "Доставка", "Ответы на вопросы"];

const clientLinks = ["Как отправить оправу", "Гарантия", "Возврат и обмен", "Конфиденциальность"];

const PhoneIcon = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    }),
  ]);
</script>

<template>
  <footer class="relative w-full overflow-hidden pt-24 pb-8">
    <!-- Замени bg-[url('...')] на реальный путь к фото -->
    <div class="absolute bottom-0 right-0 w-150 h-100 z-0 pointer-events-none">
      <div class="w-full h-full opacity-40 bg-[url('/path-to-footer-glasses.png')] bg-cover bg-bottom-right"></div>
    </div>

    <div class="max-w-[1920px] mx-auto px-28 relative z-10 flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        <div class="flex flex-col">
          <div class="flex flex-col items-center w-fit mb-8">
            <div
              class="w-24 h-24 mb-4 bg-[url('/path-to-eagle-logo.png')] bg-contain bg-center bg-no-repeat opacity-80 border border-white/10 rounded-full flex items-center justify-center text-xs text-gray-500"
            >
              LOGO
            </div>
            <h2 class="text-3xl tracking-[0.3em] font-serif uppercase mb-1">Broke</h2>
            <p class="text-[0.75rem] tracking-[0.5em] text-gray-400 uppercase">Optics</p>
          </div>

          <p class="text-white/80 text-[0.875rem] leading mb-8">
            Премиальная оптика нового формата. Изготавливаем линзы по вашему рецепту для любых оправ без переплат
          </p>

          <a
            href="#"
            class="inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#c19d60]/40 text-[#c19d60] text-sm uppercase tracking-widest hover:bg-[#c19d60] hover:text-black transition-all duration-300 rounded group w-fit"
          >
            Оставить заявку
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div class="flex flex-col lg:pl-10 lg:border-l border-white/10">
          <h4 class="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-8">Контакты</h4>

          <div class="flex flex-col gap-6">
            <a href="#" class="flex items-center gap-4 group">
              <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors">
                <TelegramIcon class="w-4 h-4 text-white/60 group-hover:text-[#c19d60]" />
              </div>
              <div class="flex flex-col">
                <span class="text-gray-300 text-sm">Telegram</span>
                <span class="text-white/60 text-[0.75rem]">@broke_optics</span>
              </div>
            </a>

            <a href="#" class="flex items-center gap-4 group">
              <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors">
                <InstagramIcon class="w-4 h-4 text-white/60 group-hover:text-[#c19d60]" />
              </div>
              <div class="flex flex-col">
                <span class="text-gray-300 text-sm">Instagram</span>
                <span class="text-white/60 text-[0.75rem]">@broke_optics</span>
              </div>
            </a>

            <a href="#" class="flex items-center gap-4 group">
              <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors">
                <AvitoIcon class="w-4 h-4 text-white/60 group-hover:text-[#c19d60]" />
              </div>
              <div class="flex flex-col">
                <span class="text-gray-300 text-sm">Avito</span>
                <span class="text-white/60 text-[0.75rem]">Broke Optics</span>
              </div>
            </a>
          </div>

          <div class="w-full h-px bg-white/10 my-8"></div>

          <div class="flex flex-col gap-5">
            <a href="tel:+79999999999" class="flex items-center gap-4 group">
              <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors">
                <PhoneIcon class="w-4 h-4 text-white/60 group-hover:text-[#c19d60]" />
              </div>
              <span class="text-white/60 text-[0.875rem] group-hover:text-white transition-colors">+7 (999) 999-99-99</span>
            </a>
            <a href="tel:+79999999999" class="flex items-center gap-4 group">
              <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors">
                <PhoneIcon class="w-4 h-4 text-white/60 group-hover:text-[#c19d60]" />
              </div>
              <span class="text-white/60 text-[0.875rem] group-hover:text-white transition-colors">+7 (999) 999-99-99</span>
            </a>
          </div>
        </div>

        <div class="flex flex-col lg:pl-10 lg:border-l border-white/10">
          <h4 class="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-8">Информация</h4>
          <ul class="flex flex-col gap-5">
            <li v-for="link in infoLinks" :key="link">
              <a href="#" class="text-white/60 text-[0.875rem] hover:text-[#c19d60] transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col lg:pl-10 lg:border-l border-white/10">
          <h4 class="text-white/60 text-[12px] tracking-[0.15em] uppercase mb-8">Для клиентов</h4>
          <ul class="flex flex-col gap-5">
            <li v-for="link in clientLinks" :key="link">
              <a href="#" class="text-white/60 text-[0.875rem] hover:text-[#c19d60] transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
        <div class="flex items-center gap-4 text-white/60 text-[12px]">
          <span class="uppercase tracking-widest text-white/60">Broke Optics &copy; 2026</span>
          <div class="w-px h-4 bg-white/20"></div>
          <span>Все права защищены</span>
        </div>

        <span class="text-white/60 text-[12px]"> Сделано с вниманием к деталям </span>
      </div>
    </div>
  </footer>
</template>
