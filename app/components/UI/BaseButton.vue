<script setup lang="ts"></script>

<template>
  <button
    class="flex items-center justify-center gap-3 px-8 py-4 border border-[#c19d60] rounded hover:shadow-[0_0_15px_rgba(193,157,96,0.3)] transition-all duration-300 bg-transparent group cursor-pointer"
  >
    <slot name="icon"></slot>
    <span class=" text-sm tracking-widest uppercase font-['Arial']">
      <slot></slot>
    </span>
  </button>
</template>
