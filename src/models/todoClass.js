import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(text) {
    (this.body = text),
      (this.id = uuidv4()),
      (this.completed = false),
      (this.urgent = false),
      (this.editing = false);
  }
}

export default Todo;
