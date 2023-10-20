<template>
  <div>
    <div>Hello WOrld {{ counter }}</div>
    <button @click="count++">Increment</button>
  </div>
</template>
<script>
import { useState } from './composables/useState';
export default {
  setup() {
    return useState();
  },
  computed: {
    counter() {
      return this.count * 2;
    },
  },
};
</script>
