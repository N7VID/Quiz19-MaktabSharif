import { createContext, useState } from "react";

export const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [todoInput, setTodoInput] = useState("");
  const [todoTimeInput, setTodoTimeInput] = useState("");

  return (
    <RootContext.Provider
      value={(todoInput, todoTimeInput, setTodoInput, setTodoTimeInput)}
    >
      {children}
    </RootContext.Provider>
  );
}
