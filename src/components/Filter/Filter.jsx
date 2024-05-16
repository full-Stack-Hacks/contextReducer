import { useState, useContext } from "react";
import TodoContext from "../../context/todoContext/TodoContext";
import "./filter.css";

const Filter = () => {
  const { showFilteredList, hideFilteredList, filterTodos } =
    useContext(TodoContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue === "") {
      hideFilteredList();
    } else {
      showFilteredList();
      filterTodos(e.target.value);
    }
    setText(e.target.value);
  };

  return (
    <div className="container filterInput">
      <h4>Filter</h4>
      <input type="text" onChange={handleChange} value={text} />
    </div>
  );
};

export default Filter;
