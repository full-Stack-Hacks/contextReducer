import Todo from "../../models/todoClass";

export const initialState = {
  todos: [],
  showEdit: false,
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "addTodo": {
      const todo = new Todo(action.payload.text);
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    }
    case "deleteTodo": {
      const newTodos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
      return {
        ...state,
        todos: newTodos,
      };
    }
    case "toggleEditForm": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            editing: !todo.editing,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: [...newTodos],
      };
    }
  }
}