import TodoInput from "./components/TodoInput/TodoInput";
import Header from "./components/Header/Header";
import { TodoProvider } from "./context/todoContext/TodoContext";
function App() {
  return (
    <div className="container">
      <TodoProvider>
        <Header />
        <TodoInput />
      </TodoProvider>
    </div>
  );
}

export default App;
