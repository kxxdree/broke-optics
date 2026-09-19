<script setup>
import AppHeader from "~/components/AppHeader.vue";
import HeroSection from "~/components/HeroSection.vue";
import LensesSection from "~/components/LensesSection.vue";
import CheaperSection from "~/components/CheaperSection.vue";
import HowItWorksSection from "~/components/HowItWorksSection.vue";
import ExamplesSection from "~/components/ExamplesSection.vue";
</script>

<template>
  <div class="min-h-screen bg-[#070707] text-white relative flex flex-col">
    <AppHeader />
    <HeroSection />
    <LensesSection />
    <CheaperSection />
    <HowItWorksSection />
    <ExamplesSection />
  </div>
</template>
