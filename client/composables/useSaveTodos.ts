import type { TodoResponse } from "~/types/Todo";
import { TodosService } from "../services/todos";
import { useToastAction } from "./useToastAction";

export const useSaveTodos = () => {
  const toast = useToastAction();
  const token = ref();
  const isModalGetTokenOpen = ref(false);

  const openModalGetToken = () => {
    isModalGetTokenOpen.value = true;
  };

  const closeModalGetToken = () => {
    isModalGetTokenOpen.value = false;
  };

  const onSubmitSaveTodosInDatabase = async (todos: TodoResponse[]) => {
    const createdManyTodos = await TodosService.createManyTodos(todos);
    token.value = createdManyTodos.access_token;
    toast.sucess("Status", "Tarefas Salvas");
    openModalGetToken();
  };

  return {
    token,
    isModalGetTokenOpen,
    openModalGetToken,
    closeModalGetToken,
    onSubmitSaveTodosInDatabase,
  };
};
