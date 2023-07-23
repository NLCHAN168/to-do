
export default function newProject(name) {
  return {
    name: name,
    todos: [],
  };
}

function addTodo(todo) {
  this.todos.push(todo);
}

//getting owned trying to implement remove logic gg
function removeTodo(todo) {
  for (let i = 0; i < this.todos.length; i++) {
    if (this.todos[i] == todo) {
      this.todos.splice(i, 1);
    }
  }
}

export { addTodo, removeTodo };
