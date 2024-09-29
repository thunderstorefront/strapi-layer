<template>
  <section class="contact-form py-16 px-4 max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">{{ block.form_title }}</h2>
    <form @submit.prevent="submitForm">
      <div v-for="field in block.fields" :key="field.label" class="mb-4">
        <label class="block text-lg font-medium mb-2">{{ field.label }}</label>
        <input
          v-if="field.type !== 'textarea'"
          :type="field.type"
          :placeholder="field.placeholder"
          class="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          v-if="field.type === 'textarea'"
          :placeholder="field.placeholder"
          class="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-green-500 text-white py-2 px-4 rounded-lg"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script lang="ts" setup>
import type { ContactFormSection } from '../../types/strapi';

defineProps<{
  block: ContactFormSection;
}>();

const submitForm = () => {
  console.log('Form submitted');
};
</script>
