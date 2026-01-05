import Image from "next/image";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <>
   <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm />
      <TodoList />
    </main>
    </>
  );
}
