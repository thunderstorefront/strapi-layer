<template>
  <section class="featured-products py-16 px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Featured Products</h2>
    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="product in block.products"
        :key="product.id"
        class="product-item text-center max-w-xs"
      >
        <img
          :src="product.image.url"
          :alt="product.name"
          class="w-full h-auto rounded-md"
        />
        <h3 class="text-xl font-semibold mt-4">{{ product.name }}</h3>
        <p class="text-lg mt-2">${{ product.price }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { FeaturedProductsSection } from '../../types/strapi';

defineProps<{
  block: FeaturedProductsSection;
}>();
</script>
