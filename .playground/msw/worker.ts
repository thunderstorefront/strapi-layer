import { handlers as strapiHandlers } from './handlers/strapi.client';

export default defineNuxtMswWorkerOption(() => {
  return {
    handlers: [...strapiHandlers]
  };
});
