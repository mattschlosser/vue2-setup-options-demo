import { ref } from 'vue';

export const useState = () => {
  const count = ref(1);

  return {
    count,
  };
};
