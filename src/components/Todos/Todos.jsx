import { useContext } from "react";
import TodoItem from "../todoItem/TodoItem";
import TodoContext from "../../context/todoContext/TodoContext";
import "./todos.css";

const Todos = () => {
  const { todos, filtered, showFiltered } = useContext(TodoContext);

  // filter list here
  const filteredList = filtered.map((todo) => {
    return <TodoItem {...todo} key={todo.id} />;
  });

  const todosList = todos.map((todo) => {
    return <TodoItem {...todo} key={todo.id} />;
  });

  {
    return showFiltered ? filteredList : todosList;
  }
};

export default Todos;
