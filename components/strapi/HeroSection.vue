<template>
  <section
    class="hero bg-cover bg-center text-center py-24 px-4"
    :style="{ backgroundImage: `url(${block.background_image.url})` }"
  >
    <div class="hero-content">
      <h1 class="text-5xl font-bold">{{ block.title }}</h1>
      <p class="text-xl mt-4">{{ block.subtitle }}</p>
      <a
        :href="block.cta_button.url"
        class="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
        >{{ block.cta_button.text }}</a
      >
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { HeroSection } from '../../types/strapi';

defineProps<{
  block: HeroSection;
}>();
</script>
