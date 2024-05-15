import { useContext } from "react";
import TodoContext from "../../context/todoContext/TodoContext";
import Button from "../Button/Button";

const TodoItem = ({ body, id, editing }) => {
  const { deleteTodo, toggleEditForm, showEdit } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleToggleEditForm = () => {
    toggleEditForm(id);
  };

  return (
    <>
      <div className="listItem">
        <div className="todoBody">{body}</div>
        <div className="todoButtons">
          <Button text="Edit" onClick={handleToggleEditForm} />
          <Button text="Delete" onClick={handleDelete} />
        </div>
      </div>
      {editing && <h1>Editing</h1>}
    </>
  );
};

export default TodoItem;
