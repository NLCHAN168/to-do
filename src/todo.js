export default function createToDo(name) {
  return {
    name: name,
    tasks: [],
    changeName(newName) {
      this.name = newName;
    },
    getName() {
      return this.name;
    },
    removeTask(task) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].title == task) {
          this.tasks.splice(i, 1);
       }
      }
    }
  };
}
