<script setup lang="ts">
import BaseButton from "./UI/BaseButton.vue";
</script>

<template>
  <header class="w-full border-b border-white/10 relative z-20">
    <div class="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 text-xs">LOGO</div>
        <div class="flex flex-col">
          <span class="text-white text-xl tracking-[0.2em] uppercase">Broke</span>
          <span class="text-gray-400 text-xs tracking-[0.4em] uppercase">Optics</span>
        </div>
      </div>

      <div class="flex items-center gap-10">
        <div class="flex items-center gap-6 text-gray-400">
          <a href="#" class="hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.03.01.12 0 .28z"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 7.615a4.385 4.385 0 100 8.77 4.385 4.385 0 000-8.77zm0 7.234a2.849 2.849 0 110-5.698 2.849 2.849 0 010 5.698zm3.963-7.79a1.025 1.025 0 11-2.05 0 1.025 1.025 0 012.05 0z"
              />
            </svg>
          </a>
        </div>

        <div class="flex flex-col text-gray-300 text-sm tracking-wider">
          <span>+7 (999) 999-99-99</span>
          <span>+7 (999) 999-99-99</span>
        </div>

        <BaseButton>Оставить заявку</BaseButton>
      </div>
    </div>
  </header>
</template>
