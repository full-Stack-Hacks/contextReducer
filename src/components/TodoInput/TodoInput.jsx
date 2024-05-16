import { useState, useContext } from "react";
import TodoContext from "../../context/todoContext/TodoContext";
import Todos from "../Todos/Todos";
import Filter from "../Filter/Filter";
import { forceCap } from "../../utils/stringUtils";
import "./todoInput.css";

const TodoInput = () => {
  const { todos, addTodo, filtering, showFilterForm } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setText(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(forceCap(text));
    setText("");
  };

  const handleShowFilter = () => {
    showFilterForm();
  };

  return (
    <>
      {filtering ? (
        <Filter />
      ) : (
        <form className="todoInputForm" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={text} />
          <input type="submit" />
          <div className="btn" onClick={handleShowFilter}>
            Filter
          </div>
        </form>
      )}
      {todos.length > 0 && <Todos />}
    </>
  );
};

export default TodoInput;
