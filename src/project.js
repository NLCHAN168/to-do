/**
 * @typedef {import('./todo.js').Todo} Todo
 */

/**
 * @typedef {object} Project
 * @property {string} name - Name of the project
 * @property {Todo[]} todos - Array of todos
 * @property {function} addTodo
 * @property {function} removeTodo
 */

/**
 * 
 * @param {string} name - Name of the new project
 * @returns {Project}
 */
export default function newProject(name) {
  return {
    name: name,
    todos: /** @type {Todo[]}*/([]),
    /**
     * Function to add a todo to the array of todos in the project
     * @param {Todo} todo 
     */
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todo) {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i] === todo) {
          this.todos.splice(i, 1);
        }
      }
    }
  };
}