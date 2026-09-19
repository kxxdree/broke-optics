<script setup lang="ts">
import TelegramIcon from "~/assets/icons/telegram-icon.svg?component";
import AddIcon from "~/assets/icons/add-icon.svg?component";
import RemoveIcon from "~/assets/icons/remove-icon.svg?component";

const activeIndex = ref<number | null>(0);

const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    num: "01",
    question: "Можно ли заменить линзы в моей оправе?",
    answer: "Да, мы можем заменить линзы практически в любой оправе, сохранив ее оригинальный вид",
  },
  {
    num: "02",
    question: "Сколько занимает изготовление?",
    answer: "Обычно 2–5 рабочих дней. Точные сроки зависят от сложности рецепта и выбранных линз. Если линзы есть в наличии - отправляем быстрее",
  },
  {
    num: "03",
    question: "Нужен ли новый рецепт?",
    answer: "Желательно иметь рецепт не старше 6-12 месяцев для максимально точного изготовления",
  },
  {
    num: "04",
    question: "Делаете ли вы астигматику и сложные рецепты?",
    answer: "Да, мы работаем с любыми сложными рецептами, включая высокие диоптрии и астигматизм",
  },
  {
    num: "05",
    question: "Есть ли гарантия на линзы и работу?",
    answer: "Мы предоставляем гарантию 1 год на покрытие линз и работу мастера",
  },
  {
    num: "06",
    question: "Что делать, если оправа редкая или сложная?",
    answer: "Наши мастера имеют большой опыт работы с премиальными и нестандартными оправами",
  },
  {
    num: "07",
    question: "Как оплатить заказ?",
    answer: "Оплата производится онлайн после согласования всех деталей заказа",
  },
  {
    num: "08",
    question: "Могу ли я отследить свой заказ?",
    answer: "Да, после отправки вы получите трек-номер для отслеживания в выбранной службе доставки",
  },
];
</script>

<template>
  <section class="relative w-full overflow-hidden py-24">
    <div
      class="absolute -top-48 -left-36 w-137.5 h-137.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_35%,transparent_90%)] blur-3xl pointer-events-none z-0"
    ></div>

    <div class="max-w-[1920px] mx-auto px-28 flex flex-col lg:flex-row gap-16 items-start relative z-10">
      <div class="w-full lg:w-[35%] flex flex-col shrink-0 pt-2 lg:sticky lg:top-24">
        <h2 class="text-5xl md:text-[3.5rem] leading uppercase mb-6 font-light tracking-widest">Ответы на вопросы</h2>

        <div class="w-12 h-px bg-[#c19d60] mb-8"></div>

        <p class="text-white/80 text-[1rem] leading-relaxed max-w-xs mb-12">
          Мы собрали ответы на самые частые вопросы. Если не нашли нужного — просто напишите нам
        </p>
      </div>

      <ul class="w-full lg:w-[65%] flex flex-col gap-4">
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
            class="absolute left-0 top-0 bottom-0 w-[0.5] bg-[#c19d60] transition-opacity duration-300"
            :class="activeIndex === index ? 'opacity-100' : 'opacity-0'"
          ></div>

          <div class="p-6 md:px-8 md:py-6 flex items-start gap-6">
            <div class="flex flex-col items-center shrink-0 pt-1">
              <span class="text-lg font-light leading-none mb-2" :class="activeIndex === index ? 'text-[#c19d60]' : 'text-white/60'">
                {{ faq.num }}
              </span>
              <div class="w-full h-px" :class="activeIndex === index ? 'bg-[#c19d60]' : 'bg-white/30'"></div>
            </div>

            <div class="grow flex flex-col">
              <div class="flex items-center justify-between w-full">
                <h3 class="text-[13px] md:text-[14px] uppercase tracking-widest pr-4" :class="activeIndex === index ? 'text-white' : 'text-gray-300'">
                  {{ faq.question }}
                </h3>

                <div class="shrink-0 flex items-center justify-center">
                  <AddIcon v-if="activeIndex !== index" class="w-5 h-5 text-gray-500 group-hover:text-white/80 transition-colors" />
                  <RemoveIcon v-else class="w-5 h-5 text-[#c19d60]" />
                </div>
              </div>

              <p v-show="activeIndex === index" class="mt-4 text-[0.875rem] text-white/60 leading-relaxed pr-8">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </li>

        <div class="mt-4 bg-white/2 border border-white/5 rounded p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-6">
            <TelegramIcon class="w-6 h-6 text-[#c19d60]" />

            <div class="flex flex-col">
              <h3 class="text-white text-[1rem] uppercase tracking-widest mb-1">Остались вопросы?</h3>
              <p class="text-white/80 text-[0.75rem]">Напишите нам - мы на связи каждый день.</p>
            </div>
          </div>

          <div class="hidden md:block w-px h-12 bg-[#c19d60] mx-2"></div>

          <a
            href="#"
            class="w-full md:w-auto shrink-0 flex items-center justify-center gap-3 px-8 py-4 border border-[#c19d60]/30 text-[#c19d60] text-sm uppercase tracking-widest hover:bg-[#c19d60] hover:text-black transition-all duration-300 rounded group"
          >
            Написать в Telegram
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </ul>
    </div>
  </section>
</template>
