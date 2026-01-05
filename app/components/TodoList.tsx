"use client";

import { useEffect } from "react";
import { useTodoStore } from "@/stores/todoStore";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="mt-4">
      {todos.map((todo: any ) => (
        <div key={todo._id} className="border p-2 rounded mb-2">
          <h3 className="font-bold">{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.complete ? "Done" : "Pending"}</p>
        </div>
      ))}
    </div>
  );
}
