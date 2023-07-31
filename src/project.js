import createToDo from "./todo.js";

export default function newProject(name) {
  return {
    name: name,
    todos: [],
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todo) {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i] == todo) {
          this.todos.splice(i, 1);
        }
      }
    }
  };
}