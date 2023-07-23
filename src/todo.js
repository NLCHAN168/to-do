export default function createToDo(name) {
  return {
    name: name,
    tasks: [],
  };
}

function changeName(newName) {
  this.name = newName;
}

function addTask(task) {
  this.tasks.push(task);
}

function removeTask(task) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].title == task) {
      this.tasks.splice(i, 1);
    }
  }
}

export { changeName, addTask, removeTask };
