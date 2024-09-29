<script setup lang="ts">
import type { Page } from './types/strapi';

const { find } = useStrapi<Page>();

const { data } = useAsyncData('page', () => find('page'));
</script>

<template>
  <div v-if="data?.data?.[0]">
    <StrapiPageRenderer :page="data.data[0].attributes" />
  </div>
</template>