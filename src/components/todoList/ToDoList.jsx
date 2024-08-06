import ToDoCard from "../todoCard/ToDoCard";

export default function ToDoList({ data }) {
  return (
    <div className="grid grid-cols-3 gap-3 overflow-y-scroll max-h-[400px]">
      {data.map((todo) => (
        <ToDoCard key={todo.id} data={todo} />
      ))}
    </div>
  );
}
