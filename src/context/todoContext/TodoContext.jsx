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

  const editTodo = (text, id) => {
    dispatch({
      type: "editTodo",
      payload: {
        text,
        id,
      },
    });
  };

  const showFilteredList = () => {
    dispatch({
      type: "showFilteredList",
    });
  };

  const hideFilteredList = () => {
    dispatch({
      type: "hideFilteredList",
    });
  };

  const filterTodos = (text) => {
    dispatch({
      type: "filterTodos",
      payload: {
        text,
      },
    });
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        deleteTodo,
        toggleEditForm,
        editTodo,
        showFilteredList,
        hideFilteredList,
        filterTodos,
        todos: state.todos,
        showFiltered: state.showFiltered,
        showEdit: state.showEdit,
        filtered: state.filtered,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
