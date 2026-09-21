<script setup lang="ts">
import CheckIcon from "~/assets/icons/check-icon.svg?component";
import StoreIcon from "~/assets/icons/store-icon.svg?component";
import CloseIcon from "~/assets/icons/close-icon.svg?component";
import AppartmentIcon from "~/assets/icons/apartment-icon.svg?component";
import PersonIcon from "~/assets/icons/person-icon.svg?component";
import PointOfSaleIcon from "~/assets/icons/point-of-sale-icon.svg?component";
import TrendingUpIcon from "~/assets/icons/trending-up-icon.svg?component";
import ScheduleIcon from "~/assets/icons/schedule-icon.svg?component";
import SettingsIcon from "~/assets/icons/settings-icon.svg?component";
import PriorityIcon from "~/assets/icons/priority-icon.svg?component";
import BalanceIcon from "~/assets/icons/balance-icon.svg?component";
import BoltIcon from "~/assets/icons/bolt-icon.svg?component";
import DesktopIcon from "~/assets/icons/desktop-icon.svg?component";

const regularOptics = [
  { icon: AppartmentIcon, title: "Аренда помещений", desc: "вы платите за их расходы" },
  { icon: PersonIcon, title: "Персонал и продавцы", desc: "дополнительные наценки" },
  { icon: PointOfSaleIcon, title: "Витрины и маркетинг", desc: "переплаты за бренд" },
  { icon: TrendingUpIcon, title: "Наценки", desc: "до 300–500%" },
  { icon: ScheduleIcon, title: "Долгие сроки", desc: "очереди и сложные процессы" },
];

const brokeOptics = [
  { icon: DesktopIcon, title: "Онлайн-формат", desc: "не платим за аренду" },
  { icon: SettingsIcon, title: "Прямое изготовление", desc: "без лишних звеньев" },
  { icon: PriorityIcon, title: "Только необходимое", desc: "фокус на качестве линз" },
  { icon: BalanceIcon, title: "Честная цена", desc: "без скрытых наценок" },
  { icon: BoltIcon, title: "Быстро", desc: "изготавливаем за 2–5 дней" },
];
</script>

<template>
  <section id="cheaper" class="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
    <div
      class="absolute -top-32 -right-32 w-96 h-96 sm:w-137.5 sm:h-137.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_35%,transparent_70%)] blur-2xl pointer-events-none z-0"
    ></div>

    <div class="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-28 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch relative z-10">
      <div class="w-full lg:w-[45%] xl:w-[40%] flex flex-col">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight uppercase mb-5 sm:mb-6 font-light tracking-wide sm:tracking-widest">
          Почему<br />
          у нас дешевле
        </h2>

        <div class="w-10 sm:w-12 h-px bg-[#c19d60] mb-5 sm:mb-6"></div>

        <p class="text-white/80 text-base sm:text-lg leading-relaxed max-w-sm mb-10 lg:mb-16">
          Без салонов. Без продавцов.<br />
          Без переплат за витрины
          <br /><br />
          Вы платите только<br />
          за линзы и работу
        </p>

        <div class="relative">
          <span class="text-[#c19d60] text-xl sm:text-2xl block -mb-1 sm:-mb-3.75 tracking-widest">до</span>

          <span
            class="text-[4.5rem] sm:text-[6.25rem] md:text-[8.125rem] leading-none bg-clip-text text-transparent bg-linear-to-b from-[#ebd094] to-[#8f7035] tracking-tighter block"
          >
            - 40%
          </span>
          <p class="text-white/60 text-sm sm:text-base xl:text-[1.125rem] tracking-[0.2em] sm:tracking-[0.3em] uppercase leading-relaxed mt-2 sm:mt-0">
            От стоимости<br />
            сетевых оптик
          </p>
        </div>
      </div>

      <div class="w-full xl:flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-6 pt-10 lg:pt-0">
        <div class="relative bg-white/2 border border-white/10 rounded pt-12 sm:pt-16 flex flex-col overflow-visible h-full">
          <div
            class="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center z-20"
          >
            <StoreIcon class="text-white/60 w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white/5 to-transparent z-0 rounded-t pointer-events-none"></div>

          <h3 class="text-center text-white/60 uppercase tracking-[0.15em] text-sm sm:text-md mb-4 sm:mb-6 relative z-10 shrink-0">Обычная оптика</h3>

          <ul class="px-4 sm:px-6 pb-6 relative z-10 grow flex flex-col justify-between">
            <li v-for="(item, index) in regularOptics" :key="index" class="flex items-center py-3 sm:py-4 border-b border-white/5 last:border-b-0">
              <div class="w-8 sm:w-10 shrink-0 text-gray-600 flex justify-center">
                <component :is="item.icon" class="text-white/60 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div class="grow pl-3 sm:pl-4">
                <div class="text-xs sm:text-sm lg:text-md text-white/60 uppercase tracking-wide sm:tracking-widest mb-1">{{ item.title }}</div>
                <div class="text-[0.85rem] sm:text-sm lg:text-sm text-white/60">{{ item.desc }}</div>
              </div>
              <div class="text-gray-600 text-sm shrink-0 pl-2">
                <CloseIcon class="text-white/60 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </li>
          </ul>
        </div>

        <div
          class="relative bg-black border border-[#c19d60] rounded pt-12 sm:pt-16 flex flex-col overflow-visible shadow-[0_0_30px_rgba(193,157,96,0.05)] h-full"
        >
          <div
            class="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0a0a0a] border border-[#c19d60] flex items-center justify-center z-20"
          >
            <div class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[#c19d60] text-2xl sm:text-3xl font-serif">B</div>
          </div>

          <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#c19d60]/10 to-transparent z-0 rounded-t pointer-events-none"></div>

          <h3 class="text-center text-[#c19d60] uppercase tracking-[0.15em] text-sm sm:text-md mb-4 sm:mb-6 relative z-10 shrink-0">Broke Optics</h3>

          <ul class="px-4 sm:px-6 pb-6 relative z-10 grow flex flex-col justify-between">
            <li v-for="(item, index) in brokeOptics" :key="index" class="flex items-center py-3 sm:py-4 border-b border-white/5 last:border-b-0">
              <div class="w-8 sm:w-10 shrink-0 text-[#c19d60] flex justify-center">
                <component :is="item.icon" class="text-[#c19d60] w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div class="grow pl-3 sm:pl-4">
                <div class="text-xs sm:text-sm lg:text-md text-white/90 uppercase tracking-wide sm:tracking-widest mb-1">{{ item.title }}</div>
                <div class="text-[0.85rem] sm:text-xs lg:text-sm text-white/90">{{ item.desc }}</div>
              </div>
              <div class="text-[#c19d60] text-sm shrink-0 pl-2">
                <CheckIcon class="text-[#c19d60] w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
