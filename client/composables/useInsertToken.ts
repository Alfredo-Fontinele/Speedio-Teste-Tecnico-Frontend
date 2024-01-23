import { useForm } from "vue-hooks-form";
import { TodosService } from "../services/todos";
import { useToastAction } from "./useToastAction";

export const useInsertToken = () => {
  const todosStore = useTodosStore();
  const { useField, handleSubmit } = useForm();
  const toast = useToastAction();

  const token = useField("token", {
    rule: {
      type: "string",
      required: true,
      pattern: "s+",
    },
  });

  const onSubmit = async (data: any) => {
    const response = await TodosService.findAllTodos(data.token);

    if (!response) {
      toast.error("Status", "Token Inválido");
      return;
    }

    todosStore.updateManyTodos(response);
    toast.sucess("Status", "Tarefas Restauradas!");
  };

  const handleSubmitForm = handleSubmit(onSubmit);

  return {
    handleSubmitForm,
    token,
  };
};
