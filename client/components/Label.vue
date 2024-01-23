<script setup lang="ts">
import type { PropType } from 'vue';
import type { Error } from 'vue-hooks-form';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  error: {
    type: Array as PropType<Error[]>,
    required: false
  }
});
</script>

<template>
  <div class="flex flex-col items-start sm:flex-row sm:items-center gap-3">
    <label for="description" class="text-xs sm:text-sm">{{
      props.text
    }}</label>
    
    <p class="text-red-500 text-xs" v-if="props.error">* {{ props.text }} é obrigatório</p>
  </div>
</template>
