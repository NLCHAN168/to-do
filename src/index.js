import createPortfolio from "./portfolio.js";
import createToDo from "./todo.js";
import newProject from "./project.js";
import createTask from "./task.js";

const portfolio = createPortfolio("My Projects");
const project = newProject("The Odin Project");
const todo = createToDo("My to-do list");
const firsttask = createTask(
  "Make a new list",
  "create a to-do list",
  "03/08/2023",
  "high",
  "make the structure"
);

firsttask.check();
todo.tasks.push(firsttask);
project.todos.push(todo);
portfolio.projects.push(project);
console.log(portfolio);
