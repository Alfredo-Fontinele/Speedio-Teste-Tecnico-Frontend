<script setup lang="ts">
import { type PropType } from "vue";
import { type TodoResponse } from "../types/Todo";

const props = defineProps({
  todos: {
    type: Array as PropType<TodoResponse[]>,
    required: false,
  },
});
</script>

<template>
  <div
    v-if="!props.todos?.length"
    class="h-[300px] flex justify-center items-center"
  >
    <div class="flex flex-col gap-3 justify-center items-center">
      <IconsEmpty />
      <h2>Nenhuma Anotação</h2>
    </div>
  </div>
</template>
