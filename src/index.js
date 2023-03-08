import createToDo from "./todo.js";
import newProject from "./project.js";
import createTask from "./task.js";

const todo = createToDo("mytodolist");
const project = newProject("TOP");
const firsttask = createTask(
  "To do List",
  "create a to-do list",
  "03/08/2023",
  "high",
  "make the structure"
);

project.tasks.push(firsttask);
todo.tasks.push(project);

console.log(todo);
