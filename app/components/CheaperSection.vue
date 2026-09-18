<template>
  <section class="relative w-full bg-[#070707] text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start relative z-10">
      <div class="w-full lg:w-[45%] flex flex-col pt-10">
        <h2 class="text-5xl md:text-[4rem] leading-tight uppercase mb-6 font-light tracking-widest">
          Почему<br />
          у нас дешевле
        </h2>

        <div class="w-12 h-px bg-[#c19d60] mb-6"></div>

        <p class="text-gray-300 text-lg leading-relaxed max-w-sm mb-16">
          Без салонов. Без продавцов.<br />
          Без переплат за витрины.
          <br /><br />
          Вы платите только<br />
          за линзы и работу.
        </p>

        <div class="relative">
          <span class="text-[#c19d60] text-xl block -mb-3.75 tracking-widest">до</span>

          <span
            class="text-[100px] md:text-[130px] leading-none font-bold bg-clip-text text-transparent bg-linear-to-b from-[#ebd094] to-[#8f7035] tracking-tighter block mb-2"
          >
            -40%
          </span>
          <p class="text-gray-400 text-[12px] tracking-[0.3em] uppercase leading-relaxed">
            От стоимости<br />
            сетевых оптик
          </p>
        </div>
      </div>

      <div class="w-full lg:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        <div class="relative bg-white/2 border border-white/10 rounded pt-16 flex flex-col overflow-visible">
          <div
            class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-3 4H2v5h20v-5h-9z"
              />
            </svg>
          </div>

          <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white/5 to-transparent z-0 rounded-t pointer-events-none"></div>

          <h3 class="text-center text-gray-500 uppercase tracking-[0.15em] text-sm mb-6 relative z-10">Обычная оптика</h3>

          <div class="px-6 pb-6 relative z-10">
            <div v-for="(item, index) in regularOptics" :key="index" class="flex items-center py-4 border-b border-white/5 last:border-b-0">
              <div class="w-10 shrink-0 text-gray-600 flex justify-center">
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <div class="grow pl-2">
                <div class="text-[11px] text-gray-400 uppercase tracking-widest mb-1">{{ item.title }}</div>
                <div class="text-[10px] text-gray-600">{{ item.desc }}</div>
              </div>
              <div class="text-gray-600 text-sm shrink-0 pl-2">✕</div>
            </div>
          </div>
        </div>

        <div class="relative bg-black border border-[#c19d60] rounded pt-16 flex flex-col overflow-visible shadow-[0_0_30px_rgba(193,157,96,0.05)]">
          <div
            class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#c19d60] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(193,157,96,0.2)]"
          >
            <div class="w-8 h-8 flex items-center justify-center text-[#c19d60] text-xs font-serif">B</div>
          </div>

          <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#c19d60]/10 to-transparent z-0 rounded-t pointer-events-none"></div>

          <h3 class="text-center text-[#c19d60] uppercase tracking-[0.15em] text-sm mb-6 relative z-10">Broke Optics</h3>

          <div class="px-6 pb-6 relative z-10">
            <div v-for="(item, index) in brokeOptics" :key="index" class="flex items-center py-4 border-b border-white/5 last:border-b-0">
              <div class="w-10 shrink-0 text-[#c19d60] flex justify-center">
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <div class="grow pl-2">
                <div class="text-[11px] text-white uppercase tracking-widest mb-1">{{ item.title }}</div>
                <div class="text-[10px] text-gray-500">{{ item.desc }}</div>
              </div>
              <div class="text-[#c19d60] text-sm shrink-0 pl-2">✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from "vue";

const IconBuilding = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z",
    }),
  ]);
const IconUser = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    }),
  ]);
const IconPresentation = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    }),
  ]);
const IconTrending = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }),
  ]);
const IconClock = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }),
  ]);

const IconMonitor = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    }),
  ]);
const IconCog = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    }),
    h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
  ]);
const IconCircle = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("circle", { cx: "12", cy: "12", r: "9", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
  ]);
const IconArrowDown = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    }),
  ]);
const IconLightning = () =>
  h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
    h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M13 10V3L4 14h7v7l9-11h-7z" }),
  ]);

// Данные для первой карточки (Обычная оптика)
const regularOptics = [
  { icon: IconBuilding, title: "Аренда помещений", desc: "вы платите за их расходы" },
  { icon: IconUser, title: "Персонал и продавцы", desc: "дополнительные наценки" },
  { icon: IconPresentation, title: "Витрины и маркетинг", desc: "переплаты за бренд" },
  { icon: IconTrending, title: "Наценки", desc: "до 300–500%" },
  { icon: IconClock, title: "Долгие сроки", desc: "очереди и сложные процессы" },
];

// Данные для второй карточки (Broke Optics)
const brokeOptics = [
  { icon: IconMonitor, title: "Онлайн-формат", desc: "не платим за аренду" },
  { icon: IconCog, title: "Прямое изготовление", desc: "без лишних звеньев" },
  { icon: IconCircle, title: "Только необходимое", desc: "фокус на качестве линз" },
  { icon: IconArrowDown, title: "Честная цена", desc: "без скрытых наценок" },
  { icon: IconLightning, title: "Быстро", desc: "изготавливаем за 2–5 дней" },
];
</script>
