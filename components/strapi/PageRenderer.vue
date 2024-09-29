<template>
  <div>
    <component
      :is="getComponentName(block.__component)"
      v-for="block in page.blocks"
      :key="block.id"
      :block="block"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  StrapiHeroSection,
  StrapiFeaturedProductsSection,
  StrapiTestimonialsSection,
  StrapiContactFormSection
} from '#components';
import type { Page } from '../../types/strapi';
import type { Component } from 'vue';

defineProps<{
  page: Page;
}>();

const getComponentName = (component: string) => {
  const componentMap: { [key: string]: Component } = {
    'section.hero': StrapiHeroSection,
    'section.featured-products': StrapiFeaturedProductsSection,
    'section.testimonials': StrapiTestimonialsSection,
    'section.contact-form': StrapiContactFormSection
  };
  return componentMap[component] || null;
};
</script>
