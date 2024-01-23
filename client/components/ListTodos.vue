<script setup>
const { setCurrentTodo, findAll } = useTodosStore();
const { orderTodosByCategory } = useOrderTodos();
const { closeRemoveModal, isRemoveModalOpen, openRemoveModal } = useListTodos();
const todos = computed(() => orderTodosByCategory(findAll()));
</script>

<template>
  <ul
    class="flex flex-col gap-3 max-h-[350px] max-w-[500px] overflow-y-auto px-2 w-full"
  >
    <li
      class="bg-white flex w-full py-4 px-2 rounded-lg gap-4"
      v-for="todo in todos"
      :key="todo.description"
    >
      <div class="flex items-center">
        <IconsClip class="text-neutral-400" />
      </div>
      <div class="w-full flex flex-col justify-center gap-2">
        <h3
          class="text-sm text-neutral-600 text-ellipsis max-w-[220px] whitespace-nowrap overflow-hidden"
        >
          {{ todo.description }}
        </h3>
        <p class="text-xs text-neutral-400">Prazo: {{ todo.reminder_date }}</p>
        <p class="text-xs text-neutral-400">
          Potencial: {{ todo.potencial_business }}
        </p>
      </div>
      <div class="flex justify-end items-center">
        <IconsTrash
          class="text-red-400 cursor-pointer"
          @click="
            setCurrentTodo(todo);
            openRemoveModal();
          "
        />
      </div>
    </li>
    <ModalsRemoveTodo
      v-if="isRemoveModalOpen"
      :close-modal="closeRemoveModal"
    />
  </ul>
</template>
