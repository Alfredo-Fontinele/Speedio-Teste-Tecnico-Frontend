export const useMenuLateral = () => {
  const { findAll, updateManyTodos } = useTodosStore();

  const todos = computed(() => findAll());

  const updateTodosWithLocalStorage = () => {
    const localData = localStorage.getItem("todos");
    if (localData) {
      const arr = JSON.parse(localData);
      updateManyTodos(arr);
    }
  };

  return {
    updateTodosWithLocalStorage,
    todos,
  };
};
