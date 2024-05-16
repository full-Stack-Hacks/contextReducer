import { useState, useContext } from "react";
import TodoContext from "../../context/todoContext/TodoContext";
import { forceCap } from "../../utils/stringUtils";
import "./todoEdit.css";
const TodoEdit = ({ id }) => {
  const { editTodo } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Send to context to edit todo with text: ${text} and id: ${id}`
    );
    editTodo(forceCap(text), id);
  };

  return (
    <form className="editForm" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text} />
      <input type="submit" />
    </form>
  );
};

export default TodoEdit;
