<template>
  <section class="testimonials py-16 px-4">
    <h2 class="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
    <div class="space-y-6">
      <div
        v-for="testimonial in block.testimonials"
        :key="testimonial.id"
        class="testimonial text-center"
      >
        <blockquote class="italic text-xl">
          "{{ testimonial.quote }}"
        </blockquote>
        <p class="mt-2 text-lg">— {{ testimonial.author }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { TestimonialsSection } from '../../types/strapi';

defineProps<{
  block: TestimonialsSection;
}>();
</script>
