<template>
  <section class="relative w-full bg-[#070707] text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-stretch relative z-10">
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

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        <div class="relative bg-white/2 border border-white/10 rounded pt-16 flex flex-col overflow-visible h-full">
          <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center z-20">
            <StoreIcon class="text-gray-400/60 w-10 h-10" />
          </div>

          <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white/5 to-transparent z-0 rounded-t pointer-events-none"></div>

          <h3 class="text-center text-gray-500 uppercase tracking-[0.15em] text-md mb-6 relative z-10">Обычная оптика</h3>

          <div class="px-6 pb-6 relative z-10">
            <div v-for="(item, index) in regularOptics" :key="index" class="flex items-center py-4 border-b border-white/5 last:border-b-0">
              <div class="w-10 shrink-0 text-gray-600 flex justify-center">
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <div class="grow pl-2">
                <div class="text-[11px] text-gray-400 uppercase tracking-widest mb-1">{{ item.title }}</div>
                <div class="text-[10px] text-gray-600">{{ item.desc }}</div>
              </div>
              <div class="text-gray-600 text-sm shrink-0 pl-2">
                <CloseIcon class="text-gray-400/60 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div class="relative bg-black border border-[#c19d60] rounded pt-16 flex flex-col overflow-visible shadow-[0_0_30px_rgba(193,157,96,0.05)] h-full">
          <div
            class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#c19d60] flex items-center justify-center z-20"
          >
            <div class="w-8 h-8 flex items-center justify-center text-[#c19d60] text-3xl font-serif">B</div>
          </div>

          <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#c19d60]/10 to-transparent z-0 rounded-t pointer-events-none"></div>

          <h3 class="text-center text-[#c19d60] uppercase tracking-[0.15em] text-md mb-6 relative z-10">Broke Optics</h3>

          <div class="px-6 pb-6 relative z-10">
            <div v-for="(item, index) in brokeOptics" :key="index" class="flex items-center py-4 border-b border-white/5 last:border-b-0">
              <div class="w-10 shrink-0 text-[#c19d60] flex justify-center">
                <component :is="item.icon" class="text-[#c19d60] w-5 h-5" />
              </div>
              <div class="grow pl-2">
                <div class="text-[11px] text-white uppercase tracking-widest mb-1">{{ item.title }}</div>
                <div class="text-[10px] text-gray-500">{{ item.desc }}</div>
              </div>
              <div class="text-[#c19d60] text-sm shrink-0 pl-2">
                <CheckIcon class="text-[#c19d60] w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
