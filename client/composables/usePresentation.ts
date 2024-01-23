export const usePresentation = () => {
  const { findAll, updateManyTodos } = useTodosStore();

  const todos = computed(() => findAll());

  const isOpenRecoverModal = ref(false);

  const openRecoverModal = () => {
    isOpenRecoverModal.value = true;
  };

  const closeRecoverModal = () => {
    isOpenRecoverModal.value = false;
  };

  onMounted(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const arr = JSON.parse(todos);
      updateManyTodos(arr);
    }
  });

  return {
    openRecoverModal,
    todos,
    isOpenRecoverModal,
    closeRecoverModal,
  };
};
