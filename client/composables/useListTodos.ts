export const useListTodos = () => {
  const isRemoveModalOpen = ref(false);

  const openRemoveModal = () => {
    isRemoveModalOpen.value = true;
  };

  const closeRemoveModal = () => {
    isRemoveModalOpen.value = false;
  };

  return {
    isRemoveModalOpen,
    openRemoveModal,
    closeRemoveModal,
  };
};
