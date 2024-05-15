import { useContext } from "react";
import TodoItem from "../todoItem/TodoItem";
import TodoContext from "../../context/todoContext/TodoContext";
import "./todos.css";

const Todos = () => {
  const { todos } = useContext(TodoContext);

  const todosList = todos.map((todo) => {
    return <TodoItem {...todo} key={todo.id} />;
  });

  return <div className="list">{todosList}</div>;
};

export default Todos;
