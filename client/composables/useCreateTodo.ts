type UseCreateTodoProps = {
  closeFormCreateTodo: Function;
  todoSchema: any;
  handleSubmit: (
    onSubmit: (fieldValues: object) => any
  ) => (e?: Event | undefined) => Promise<void>;
};

export const useCreateTodo = ({
  closeFormCreateTodo,
  todoSchema,
  handleSubmit,
}: UseCreateTodoProps) => {
  const todosStore = useTodosStore();
  const toast = useToastAction();

  const safeTodosInLocalStorage = () => {
    const todosLocal = JSON.stringify(todosStore.todos);
    localStorage.setItem("todos", todosLocal);
  };

  const createTodoSubmit = async () => {
    const todo = {
      reminder_date: formatRemiderDate(todoSchema.reminder_date.value),
      description: todoSchema.description.value,
      potencial_business: todoSchema.potencial_business.value,
    };

    const existTodoByDescription = todosStore.findByDescription(
      todo.description
    );

    if (existTodoByDescription) {
      toast.error("Status", "Descrição já existe!");
      return;
    }

    const existTodoByReminderDate = todosStore.findByReminderDate(
      todo.reminder_date
    );

    if (existTodoByReminderDate) {
      toast.error("Status", "Lembrete já existe!");
      return;
    }

    todosStore.createTodo(todo);
    safeTodosInLocalStorage();

    closeFormCreateTodo();
    toast.sucess("Status", "Tarefa Criada!");
  };

  const onSubmit = handleSubmit(createTodoSubmit);

  return {
    onSubmit,
  };
};
