import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToDoApp from "./components/todoApp/ToDoApp";
import { Slide, ToastContainer } from "react-toastify";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer transition={Slide} />
      <ToDoApp />
    </QueryClientProvider>
  );
}

export default App;
