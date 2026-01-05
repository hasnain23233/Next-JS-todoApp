"use client";

import { useState } from "react";
import { useTodoStore } from "@/stores/todoStore";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    await addTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
        className="border p-2 rounded"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Todo description"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>
    </form>
  );
}
