import type { StoreDefinition } from "pinia";
import type { TodoRequest, TodoResponse } from "./Todo";

export type UseTodosStoreProps = StoreDefinition<
  "todosStore",
  {
    currentTodo: TodoResponse;
    todos: TodoResponse[];
  },
  {},
  {
    setCurrentTodo(todo: TodoResponse): void;
    findAll(): {
      id: string;
      description: string;
      potencial_business: string;
      reminder_date: string;
      created_at: string;
      updated_at?: string | undefined;
    }[];
    findByDescription(description: string):
      | {
          id: string;
          description: string;
          potencial_business: string;
          reminder_date: string;
          created_at: string;
          updated_at?: string | undefined;
        }
      | undefined;
    findByReminderDate(reminderDate: string):
      | {
          id: string;
          description: string;
          potencial_business: string;
          reminder_date: string;
          created_at: string;
          updated_at?: string | undefined;
        }
      | undefined;
    editTodo(): void;
    removeTodo(): void;
    createTodo(todo: TodoRequest): void;
    updateManyTodos(todos: TodoResponse[]): void;
  }
>;
