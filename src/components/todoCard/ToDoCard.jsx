export default function ToDoCard({ data }) {
  return (
    <div className="border border-black rounded-md w-32 flex flex-col justify-center items-center">
      <p className="py-2">{data.todo}</p>
      <p>{data.time}</p>
      <div className="flex gap-2 py-2">
        <img src="edit.svg" alt="" className="w-5 cursor-pointer" />
        <img src="bin.svg" alt="" className="w-5 cursor-pointer" />
      </div>
    </div>
  );
}
