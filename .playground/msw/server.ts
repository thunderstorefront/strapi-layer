import { handlers } from './handlers/strapi.server';

export default defineNuxtMswServerOption(() => {
  const baseURL = 'http://localhost:3000';

  return {
    baseURL,
    handlers
  };
});
