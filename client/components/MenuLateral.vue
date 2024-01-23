<script setup>
const { todos, updateTodosWithLocalStorage } = useMenuLateral();

onMounted(() => {
  updateTodosWithLocalStorage();
});
</script>

<template>
  <aside
    class="hidden lg:flex w-[100%] max-w-[350px] bg-pallete-gray-primary min-h-screen pt-4 px-4 flex-col justify-between gap-3"
  >
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <h2>Suas Anotações</h2>
        <SaveTodos />
      </div>

      <EmptyTodos :todos="todos" />
      <ListTodos :todos="todos" />
    </div>

    <img class="w-[250px]" src="/imgs/undraw-image.svg" alt="teste" />
  </aside>
</template>
