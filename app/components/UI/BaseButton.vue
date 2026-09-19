<script setup lang="ts"></script>

<template>
  <button
    class="shrink-0 flex items-center justify-center w-full lg:w-auto gap-4 px-8 py-5 border border-[#c19d60]/30 text-[#c19d60] text-sm uppercase tracking-widest hover:bg-[#c19d60] hover:text-black hover:border-[#c19d60] transition-all duration-300 rounded group cursor-pointer"
  >
    <slot name="icon"></slot>
    <span class="text-sm tracking-widest uppercase">
      <slot></slot>
    </span>
  </button>
</template>
