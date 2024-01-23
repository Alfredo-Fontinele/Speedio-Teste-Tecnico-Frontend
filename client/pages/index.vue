<script setup lang="ts">
import { useHome } from "../composables/useHome";

const { closeFormCreateTodo, isFormCreateTodoOpen, openFormCreateTodo } =
  useHome();
</script>

<template>
  <main class="bg-neutral-100 min-h-screen flex">
    <Toast position="top-center" />
    <MenuLateral />

    <Presentation
      v-if="!isFormCreateTodoOpen"
      :openFormCreateTodo="openFormCreateTodo"
    />

    <FormsCreateTodo v-else :closeFormCreateTodo="closeFormCreateTodo" />
  </main>
</template>
