import { useContext } from "react";
import { RootContext } from "../../context/Context";
import usePostItem from "../../hooks/usePostItem";

export default function Form() {
  const { todoInput, setTodoInput, todoTimeInput, setTodoTimeInput } =
    useContext(RootContext);
  console.log(todoInput);

  const { createItem } = usePostItem({
    url: "http://localhost:3000/ToDo",
    queryKey: "todo",
    successMessage: "Added Successfully!",
  });

  function handleSubmitPostTodo(value) {
    createItem(value);
  }

  return (
    <form
      className="flex flex-col border-2 border-black px-8 pt-4 pb-6 rounded-lg gap-2"
      onSubmit={() =>
        handleSubmitPostTodo({
          id: crypto.randomUUID(),
          todo: todoInput,
          time: todoTimeInput,
        })
      }
    >
      <h1 className="text-center font-bold py-2">TODO APP</h1>
      <input
        value={todoInput}
        type="text"
        placeholder="Things to Do"
        className="border border-black rounded-sm pl-2 py-1"
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <input
        value={todoTimeInput}
        type="number"
        placeholder="Time to Do"
        className="border border-black rounded-sm pl-2 py-1"
        onChange={(e) => setTodoTimeInput(e.target.value)}
      />
      <button type="submit" className="py-1 px-4 bg-cyan-300 rounded-lg">
        Submit
      </button>
    </form>
  );
}
