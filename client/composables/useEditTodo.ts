import { useFormTodo } from "../composables/useFormTodo";

export const useEditTodo = () => {
  const { todoSchema } = useFormTodo();

  const isModalRemoveTodoOpen = ref(false);

  const closeModalRemoveTodo = () => {
    isModalRemoveTodoOpen.value = false;
  };

  const openModalRemoveTodo = () => {
    isModalRemoveTodoOpen.value = true;
  };

  return {
    todoSchema,
    isModalRemoveTodoOpen,
    closeModalRemoveTodo,
    openModalRemoveTodo,
  };
};
