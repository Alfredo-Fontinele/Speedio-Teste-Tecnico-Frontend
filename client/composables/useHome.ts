export const useHome = () => {
  const isFormCreateTodoOpen = ref(false);

  const closeFormCreateTodo = () => {
    isFormCreateTodoOpen.value = false;
  };

  const openFormCreateTodo = () => {
    isFormCreateTodoOpen.value = true;
  };
  return {
    isFormCreateTodoOpen,
    openFormCreateTodo,
    closeFormCreateTodo,
  };
};
