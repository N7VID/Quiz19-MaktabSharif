import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../form/Form";
import ToDoList from "../todoList/ToDoList";

export default function ToDoApp() {
  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:3000/ToDo");
    return res.data;
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchTodos,
  });

  if (isError) {
    toast.error(error?.message || "An error occurred", {
      position: "top-left",
      rtl: false,
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen my-0 mx-auto w-[800px] flex justify-between items-center">
      <Form />
      {data ? <ToDoList data={data} /> : <div>No data available</div>}
    </div>
  );
}
