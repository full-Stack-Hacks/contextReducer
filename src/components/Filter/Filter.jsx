import { useState, useContext } from "react";
import TodoContext from "../../context/todoContext/TodoContext";

const Filter = () => {
  const { todos } = useContext(TodoContext);

  const [text, setText] = "";

  const handleChange = (e) => {
    const newValue = e.target.value;

    filterTodos(newValue);

    setText(e.target.value);
  };

  return (
    <form className="todoInputForm">
      <label>Filter</label>
      <input type="text" onChange={handleChange} value={text} />
    </form>
  );
};

export default Filter;
