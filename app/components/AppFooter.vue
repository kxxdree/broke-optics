<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import InstagramIcon from "~/assets/icons/instagram-icon.svg?component";
import AvitoIcon from "~/assets/icons/avito-icon.svg?component";

import BaseLink from "./UI/BaseLink.vue";

const infoLinks = ["Что мы делаем", "Почему у нас дешевле", "Как мы работаем", "Примеры работ", "Доставка", "Ответы на вопросы"];

const clientLinks = ["Как отправить оправу", "Гарантия", "Возврат и обмен", "Конфиденциальность"];
</script>

<template>
  <footer class="relative w-full overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8">
    <div
      class="absolute -bottom-24 sm:-bottom-48 -right-16 sm:-right-36 w-96 h-96 sm:w-137.5 sm:h-137.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_35%,transparent_90%)] blur-3xl pointer-events-none z-0"
    ></div>

    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 relative z-10 flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 lg:mb-20">
        <div class="flex flex-col lg:col-span-2 lg:pr-16 md:col-span-2">
          <div class="flex flex-col mx-auto lg:items-center lg:w-fit mb-6 sm:mb-8">
            <h2 class="text-2xl sm:text-5xl tracking-[0.2em] sm:tracking-[0.3em] font-serif uppercase mb-1">Broke</h2>
            <p class="text-[0.65rem] sm:text-[1.25rem] tracking-[0.4em] sm:tracking-[0.5em] text-gray-400 uppercase">Optics</p>
          </div>

          <p class="text-white/80 text-sm sm:text-[1rem] leading-relaxed mb-8 max-w-sm">
            Премиальная оптика нового формата. <br />
            Изготавливаем линзы по вашему рецепту для любых оправ без переплат
          </p>

          <BaseLink :url="'https://t.me/managebroke'" class="mt-0 lg:mt-auto w-full sm:w-fit justify-center group">
            <span>Оставить заявку</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </BaseLink>
        </div>

        <div class="flex flex-col pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:px-8">
          <h4 class="text-white/60 text-sm sm:text-[1rem] tracking-[0.15em] uppercase mb-6 sm:mb-8">Контакты</h4>

          <div class="flex flex-col gap-5 sm:gap-6">
            <nuxt-link href="https://t.me/managebroke" target="_blank" class="flex items-center gap-4 group">
              <div
                class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors shrink-0"
              >
                <TelegramIcon class="w-4 h-4 text-white/60 group-hover:text-[#c19d60]" />
              </div>
              <div class="flex flex-col">
                <span class="text-gray-300 text-sm">Telegram</span>
                <span class="text-white/60 text-xs sm:text-[0.75rem]">@managebroke</span>
              </div>
            </nuxt-link>

            <nuxt-link href="https://www.instagram.com/broke.optics" target="_blank" class="flex items-center gap-4 group">
              <div
                class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors shrink-0"
              >
                <InstagramIcon class="w-4 h-4 text-white/60 group-hover:text-[#c19d60]" />
              </div>
              <div class="flex flex-col">
                <span class="text-gray-300 text-sm">Instagram</span>
                <span class="text-white/60 text-xs sm:text-[0.75rem]">@broke.optics</span>
              </div>
            </nuxt-link>

            <nuxt-link href="#" target="_blank" class="flex items-center gap-4 group">
              <div
                class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c19d60] transition-colors shrink-0"
              >
                <AvitoIcon class="w-4 h-4 group-hover:text-[#c19d60]" />
              </div>
              <div class="flex flex-col">
                <span class="text-gray-300 text-sm">Avito</span>
                <span class="text-white/60 text-xs sm:text-[0.75rem]">Broke Optics</span>
              </div>
            </nuxt-link>
          </div>
        </div>

        <div class="flex flex-col pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:px-8">
          <h4 class="text-white/60 text-sm sm:text-[1rem] tracking-[0.15em] uppercase mb-6 sm:mb-8">Информация</h4>
          <ul class="flex flex-col gap-4 sm:gap-5">
            <li v-for="link in infoLinks" :key="link">
              <a href="#" class="text-white/60 text-sm sm:text-[0.875rem] hover:text-[#c19d60] transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col pt-8 lg:pt-0 border-t md:border-t-0 lg:border-l border-white/10 lg:px-8">
          <h4 class="text-white/60 text-sm sm:text-[1rem] tracking-[0.15em] uppercase mb-6 sm:mb-8">Для клиентов</h4>
          <ul class="flex flex-col gap-4 sm:gap-5">
            <li v-for="link in clientLinks" :key="link">
              <a href="#" class="text-white/60 text-sm sm:text-[0.875rem] hover:text-[#c19d60] transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-white/10 text-center md:text-left">
        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/60 text-[10px] sm:text-[12px]">
          <span class="uppercase tracking-widest text-white/60">Broke Optics &copy; {{ new Date().getFullYear() }}</span>

          <div class="hidden sm:block w-px h-4 bg-white/20"></div>
          <span>Все права защищены</span>
        </div>

        <span class="text-white/60 text-[10px] sm:text-[12px] mt-2 md:mt-0"> Сделано с вниманием к деталям </span>
      </div>
    </div>
  </footer>
</template>
