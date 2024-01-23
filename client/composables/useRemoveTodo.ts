import { useTodosStore } from "../stores/todos";
import { type TodoResponse } from "../types/Todo";
import { useToastAction } from "./useToastAction";

type UseRemoveTodoProps = {
  closeModal: Function;
};

export const useRemoveTodo = ({ closeModal }: UseRemoveTodoProps) => {
  const toast = useToastAction();
  const todosStore = useTodosStore();

  const onSubmitRemove = () => {
    todosStore.removeTodo();
    closeModal();
    const todosLocal = localStorage.getItem("todos");
    if (todosLocal) {
      const arrFromLocalStorage: TodoResponse[] = JSON.parse(todosLocal);
      const todosLocalFilter = arrFromLocalStorage.filter(
        (todo) => todo.id !== todosStore.currentTodo.id
      );
      localStorage.setItem("todos", JSON.stringify(todosLocalFilter));
    }
    toast.sucess("Status", "Tarefa Removida!");
  };

  return {
    onSubmitRemove,
  };
};
