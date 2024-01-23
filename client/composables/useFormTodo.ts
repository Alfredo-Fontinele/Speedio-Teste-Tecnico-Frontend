import { useForm } from "vue-hooks-form";

export const useFormTodo = () => {
  const isModalRemoveTodoOpen = ref(false);

  const closeModalRemoveTodo = () => {
    isModalRemoveTodoOpen.value = false;
  };

  const openModalRemoveTodo = () => {
    isModalRemoveTodoOpen.value = true;
  };

  const { useField, handleSubmit } = useForm();

  const description = useField("description", {
    rule: {
      type: "string",
      required: true,
      pattern: /\S/,
    },
  });

  const potencial_business = useField("potencial_business", {
    rule: {
      type: "string",
      required: true,
      pattern: /\S/,
    },
  });

  const reminder_date = useField("reminder_date", {
    rule: {
      type: "string",
      required: true,
      pattern: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
    },
  });

  const todoSchema = {
    description,
    potencial_business,
    reminder_date,
  };

  return {
    todoSchema,
    handleSubmit,
    isModalRemoveTodoOpen,
    closeModalRemoveTodo,
    openModalRemoveTodo,
  };
};
