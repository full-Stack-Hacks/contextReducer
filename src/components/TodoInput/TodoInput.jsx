import { useState, useContext } from "react";
import TodoContext from "../../context/todoContext/TodoContext";

import Filter from "../Filter/Filter";
import { forceCap } from "../../utils/stringUtils";
import "./todoInput.css";

const TodoInput = () => {
  const { todos, addTodo } = useContext(TodoContext);

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

  return (
    <>
      <form className="todoInputForm" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <input type="submit" />
      </form>
      <Filter />
    </>
  );
};

export default TodoInput;
