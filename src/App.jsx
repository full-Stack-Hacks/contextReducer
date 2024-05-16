import TodoInput from "./components/TodoInput/TodoInput";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import { TodoProvider } from "./context/todoContext/TodoContext";
function App() {
  return (
    <div className="container">
      <TodoProvider>
        <Header />
        <TodoInput />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
