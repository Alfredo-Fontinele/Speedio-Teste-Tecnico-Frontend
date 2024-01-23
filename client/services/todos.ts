import type { TodoRequest, TodoResponse } from "~/types/Todo";

const BASE_URL = "http://localhost:33333";

type CreateManyTodosResponse = {
  access_token: string;
  todos: {
    count: number;
  };
};

const createTodo = async (todo: TodoRequest): Promise<TodoResponse | []> => {
  try {
    const { data } = await useAsyncData("todo", () =>
      $fetch(`${BASE_URL}/todos`, {
        method: "POST",
        body: todo,
      })
    );
    return data.value as TodoResponse;
  } catch {
    return [];
  }
};

const createManyTodos = async (todos: TodoResponse[]) => {
  const { data } = await useAsyncData("todo", () =>
    $fetch(`${BASE_URL}/todos`, {
      method: "POST",
      body: todos,
    })
  );
  return data.value as CreateManyTodosResponse;
};

const findAllTodos = async (token: string) => {
  try {
    const { data } = await useAsyncData("todo", () =>
      $fetch(`${BASE_URL}/todos/get-all`, {
        method: "POST",
        body: {
          access_token: token,
        },
      })
    );
    return data.value as TodoResponse[];
  } catch {
    return [];
  }
};

export const TodosService = {
  createManyTodos,
  createTodo,
  findAllTodos,
};
