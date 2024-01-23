<script setup>
const { findAll } = useTodosStore();

const {
  token,
  closeModalGetToken,
  isModalGetTokenOpen,
  onSubmitSaveTodosInDatabase,
  openModalGetToken,
} = useSaveTodos();

const todos = computed(() => findAll());
</script>

<template>
  <div>
    <button
      v-if="todos.length"
      @click="onSubmitSaveTodosInDatabase(todos)"
      class="px-3 py-2 border-2 border-solid border-pallete-main text-pallete-main hover:bg-pallete-main hover:text-white rounded-lg text-sm sm:text-md"
    >
      Persistir Dados
    </button>

    <ModalsGetToken
      :token="token.token"
      v-if="isModalGetTokenOpen"
      :closeModal="closeModalGetToken"
    />
  </div>
</template>
