import type { TodoResponse } from "~/types/Todo";

export const useOrderTodos = () => {
  const orderTodosByCategory = (todos: TodoResponse[]): TodoResponse[] => {
    return todos.sort((a, b) => {
      const [dateA, timeA] = a.reminder_date.split(" | ");
      const [dateB, timeB] = b.reminder_date.split(" | ");

      const [dayA, monthA, yearA] = dateA.split("/");
      const [dayB, monthB, yearB] = dateB.split("/");

      const dateTimeA = new Date(`${yearA}-${monthA}-${dayA}T${timeA}`);
      const dateTimeB = new Date(`${yearB}-${monthB}-${dayB}T${timeB}`);

      return dateTimeA.getTime() - dateTimeB.getTime();
    });
  };

  return {
    orderTodosByCategory,
  };
};
