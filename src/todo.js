/**
 * @typedef {import('./task.js').Task} Task
 */

/**
 *
 * @typedef {object} Todo
 * @property {string} name - The name of the todo list
 * @property {Task[]} tasks - Array of tasks
 * @property {function} changeName
 * @property {function} addTask
 * @property {function} removeTask
 */

export default function createToDo(name) {
  /**
   * @returns {Todo}
   */
  return {
    name: name,
    tasks: /** @type {Task[]} */ ([]),
    /**
     *
     * @param {string} newName - New name for the todo list.wwwww
     */
    changeName(newName) {
      this.name = newName;
    },
    /**
     *
     * @param {Task} task - Task to push into the tasks array.
     */
    addTask(task) {
      this.tasks.push(task);
    },
    /**
     *
     * @param {Task} task - Task to remove from the tasks array.
     */
    removeTask(task) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i] === task) {
          this.tasks.splice(i, 1);
        }
      }
    },
  };
}
