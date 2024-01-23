import { defineStore } from "pinia";
import { useOrderTodos } from "./../composables/useOrderTodos";
import { type UseTodosStoreProps } from "./../types/Store";
import { type TodoRequest, type TodoResponse } from "./../types/Todo";

const { orderTodosByCategory } = useOrderTodos();

export const useTodosStore: UseTodosStoreProps = defineStore("todosStore", {
  state: () => {
    return {
      currentTodo: {} as TodoResponse,
      todos: orderTodosByCategory([]),
    };
  },
  actions: {
    setCurrentTodo(todo: TodoResponse) {
      this.currentTodo = todo;
    },
    findAll() {
      return this.todos;
    },
    findByDescription(description: string) {
      return this.todos.find((todo) => todo.description === description);
    },
    findByReminderDate(reminderDate: string) {
      return this.todos.find((todo) => todo.reminder_date === reminderDate);
    },
    createTodo(todo: TodoRequest) {
      this.todos.push({
        id: crypto.randomUUID(),
        description: todo.description,
        reminder_date: todo.reminder_date,
        potencial_business: todo.potencial_business,
        created_at: new Date().toISOString(),
      });
    },
    removeTodo() {
      const indexTodo = this.todos.findIndex(
        (todo) => todo.id === this.currentTodo.id
      );
      this.todos.splice(indexTodo, 1);
    },
    updateManyTodos(todos: TodoResponse[]) {
      this.todos = todos;
    },
    editTodo() {
      const indexTodo = this.todos.findIndex(
        (todo) => todo.id === this.currentTodo.id
      );
      this.todos[indexTodo] = { ...this.todos[indexTodo], ...this.currentTodo };
    },
  },
});
