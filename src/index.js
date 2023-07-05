import createToDo from "./todo.js";
import newProject from "./project.js";
import createTask from "./task.js";

const project = newProject("TOP");
const todo = createToDo("mytodolist");
const firsttask = createTask(
  "Make a new list",
  "create a to-do list",
  "03/08/2023",
  "high",
  "make the structure"
);

todo.tasks.push(firsttask);
project.todos.push(todo);

console.log(project);
