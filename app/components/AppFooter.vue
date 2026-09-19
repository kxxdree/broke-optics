<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import InstagramIcon from "~/assets/icons/instagram-icon.svg?component";
import AvitoIcon from "~/assets/icons/avito-icon.svg?component";
import PhoneIcon from "~/assets/icons/phone-icon.svg?component";

const infoLinks = ["Что мы делаем", "Почему у нас дешевле", "Как мы работаем", "Примеры работ", "Доставка", "Ответы на вопросы"];

const clientLinks = ["Как отправить оправу", "Гарантия", "Возврат и обмен", "Конфиденциальность"];
</script>

<template>
  <footer class="relative w-full overflow-hidden pt-24 pb-8">
    <div
      class="absolute -bottom-48 -right-36 w-137.5 h-137.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_35%,transparent_90%)] blur-3xl pointer-events-none z-0"
    ></div>

    <div class="max-w-[1920px] mx-auto px-28 relative z-10 flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
        <div class="flex flex-col lg:col-span-2 lg:pr-16">
          <div class="flex flex-col items-center w-fit mb-8">
            <div
              class="w-24 h-24 mb-4 bg-[url('/path-to-eagle-logo.png')] bg-contain bg-center bg-no-repeat opacity-80 border border-white/10 rounded-full flex items-center justify-center text-xs text-gray-500"
            >
              LOGO
            </div>
            <h2 class="text-3xl tracking-[0.3em] font-serif uppercase mb-1">Broke</h2>
            <p class="text-[0.75rem] tracking-[0.5em] text-gray-400 uppercase">Optics</p>
          </div>

          <p class="text-white/80 text-[0.875rem] leading mb-8 max-w-sm">
            Премиальная оптика нового формата. Изготавливаем линзы по вашему рецепту для любых оправ без переплат
          </p>

          <a
            href="#"
            class="inline-flex items-center mt-auto w-full justify-center gap-4 px-8 py-4 border border-[#c19d60]/40 text-[#c19d60] text-sm uppercase tracking-widest hover:bg-[#c19d60] hover:text-black transition-all duration-300 rounded group"
          >
            Оставить заявку
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div class="flex flex-col lg:px-8 lg:border-l border-white/10">
          <h4 class="text-white/60 text-[1rem] tracking-[0.15em] uppercase mb-8">Контакты</h4>

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
                <AvitoIcon class="w-4 h-4 group-hover:text-[#c19d60]" />
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

        <div class="flex flex-col lg:px-8 lg:border-l border-white/10">
          <h4 class="text-white/60 text-[1rem] tracking-[0.15em] uppercase mb-8">Информация</h4>
          <ul class="flex flex-col gap-5">
            <li v-for="link in infoLinks" :key="link">
              <a href="#" class="text-white/60 text-[0.875rem] hover:text-[#c19d60] transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col lg:px-8 lg:border-l border-white/10">
          <h4 class="text-white/60 text-[1rem] tracking-[0.15em] uppercase mb-8">Для клиентов</h4>
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
