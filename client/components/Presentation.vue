<script setup lang="ts">
import { usePresentation } from "../composables/usePresentation";

const { closeRecoverModal, isOpenRecoverModal, openRecoverModal, todos } =
  usePresentation();

const props = defineProps({
  openFormCreateTodo: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <section
    class="w-full min-h-screen flex flex-col justify-center items-center bg-pallete-blue-dark p-4"
  >
    <div class="w-full flex justify-end items-center">
      <ButtonRecoverTodos @click="openRecoverModal" />
    </div>
    <div class="flex flex-col items-center justify-center gap-5 w-full h-full">
      <div class="flex flex-col items-center gap-1">
        <IconsClip class="text-[30px] text-emerald-500" />
        <h1 class="text-white text-xl font-medium text-center">
          Bem-vindo ao Anotation
        </h1>
        <span class="flex items-center gap-2">
          <span class="text-white">by</span>
          <span class="text-blue-500">Speedio</span>
        </span>
      </div>

      <ListTodos :todos="todos" class="flex lg:hidden" />

      <button
        @click="props.openFormCreateTodo()"
        class="flex gap-2 items-center bg-pallete-main px-3 py-2 rounded text-white"
      >
        <IconsAddTodo />
        Criar Anotação
      </button>
      <SaveTodos class="flex lg:hidden" />
    </div>

    <ModalsInsertToken
      v-if="isOpenRecoverModal"
      :closeModal="closeRecoverModal"
    />
  </section>
</template>
