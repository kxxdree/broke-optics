<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import AddIcon from "~/assets/icons/add-icon.svg?component";
import RemoveIcon from "~/assets/icons/remove-icon.svg?component";

import BaseLink from "./UI/BaseLink.vue";

import { faqs } from "~/utils/faqs";

const activeIndex = ref<number | null>(0);

const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section id="faq" class="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
    <div
      class="absolute -top-24 sm:-top-48 -left-16 sm:-left-36 w-96 h-96 sm:w-137.5 sm:h-137.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_35%,transparent_90%)] blur-3xl pointer-events-none z-0"
    ></div>

    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative z-10">
      <div class="w-full lg:w-[35%] flex flex-col shrink-0 pt-2 lg:sticky lg:top-24">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight uppercase mb-5 sm:mb-6 font-light tracking-wide sm:tracking-widest">
          Ответы на вопросы
        </h2>

        <div class="w-10 sm:w-12 h-px bg-[#c19d60] mb-6 sm:mb-8"></div>

        <p class="text-white/80 text-base lg:text-[1rem] leading-relaxed max-w-xs mb-4 lg:mb-12">
          Мы собрали ответы на самые частые вопросы. Если не нашли нужного - просто напишите нам
        </p>
      </div>

      <ul class="w-full lg:w-[65%] flex flex-col gap-3 sm:gap-4">
        <li
          v-for="(faq, index) in faqs"
          :key="faq.num"
          @click="toggleItem(index)"
          class="group cursor-pointer rounded border transition-all duration-300 relative overflow-hidden flex flex-col"
          :class="[
            activeIndex === index ? 'bg-linear-to-r from-[#c19d60]/5 to-transparent border-[#c19d60]/30' : 'bg-white/2 border-white/5 hover:border-white/10',
          ]"
        >
          <div
            class="absolute left-0 top-0 bottom-0 w-1 bg-[#c19d60] transition-opacity duration-300"
            :class="activeIndex === index ? 'opacity-100' : 'opacity-0'"
          ></div>

          <div class="p-4 sm:p-6 md:px-8 md:py-6 flex items-start gap-4 sm:gap-6">
            <div class="flex flex-col items-center shrink-0 pt-1">
              <span class="text-base sm:text-lg font-light leading-none mb-2" :class="activeIndex === index ? 'text-[#c19d60]' : 'text-white/60'">
                {{ faq.num }}
              </span>
              <div class="w-full h-px" :class="activeIndex === index ? 'bg-[#c19d60]' : 'bg-white/30'"></div>
            </div>

            <div class="grow flex flex-col">
              <div class="flex items-center justify-between w-full">
                <h3
                  class="text-sm sm:text-[0.875rem] md:text-[1.25rem] uppercase tracking-wide sm:tracking-widest pr-2 sm:pr-4 leading-snug"
                  :class="activeIndex === index ? 'text-white' : 'text-gray-300'"
                >
                  {{ faq.question }}
                </h3>

                <div class="shrink-0 flex items-center justify-center">
                  <AddIcon v-if="activeIndex !== index" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-white/80 transition-colors" />
                  <RemoveIcon v-else class="w-4 h-4 sm:w-5 sm:h-5 text-[#c19d60]" />
                </div>
              </div>

              <p v-show="activeIndex === index" class="mt-3 sm:mt-4 text-[1rem] text-white/60 leading-relaxed pr-2 sm:pr-8">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </li>

        <div
          class="mt-4 sm:mt-6 bg-white/2 border border-white/5 rounded p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div class="flex items-center gap-4 sm:gap-6">
            <TelegramIcon class="w-6 h-6 text-[#c19d60] shrink-0" />

            <div class="flex flex-col">
              <h3 class="text-white text-sm sm:text-[1rem] uppercase tracking-widest mb-1">Остались вопросы?</h3>
              <p class="text-white/80 text-xs sm:text-[0.75rem]">Напишите нам - мы на связи каждый день.</p>
            </div>
          </div>

          <div class="hidden md:block w-px h-12 bg-[#c19d60]/50 mx-2"></div>

          <BaseLink :url="'https://t.me/managebroke'" class="w-full sm:w-auto justify-center group">
            <span>Написать в Telegram</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </BaseLink>
        </div>
      </ul>
    </div>
  </section>
</template>
