import { create } from "zustand";
import { ITodo } from "@/model/todo"; // same interface as backend

interface TodoState {
  todos: ITodo[];
  fetchTodos: () => Promise<void>;
  addTodo: (todo: Partial<ITodo>) => Promise<void>;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],

  fetchTodos: async () => {
    try {
      const res = await fetch("/api/todo");
      const data = await res.json();
      set({ todos: data });
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  },

  addTodo: async (todo: Partial<ITodo>) => {
    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      const data = await res.json();
      set({ todos: [...get().todos, data] });
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  },
}));
