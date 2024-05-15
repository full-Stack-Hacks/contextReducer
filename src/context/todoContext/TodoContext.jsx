import { createContext, useReducer } from "react";
import { todoReducer, initialState } from "./TodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({
      type: "addTodo",
      payload: {
        text,
      },
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "deleteTodo",
      payload: {
        id,
      },
    });
  };

  const toggleEditForm = (id) => {
    dispatch({
      type: "toggleEditForm",
      payload: {
        id,
      },
    });
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        deleteTodo,
        toggleEditForm,
        todos: state.todos,
        showEdit: state.showEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
