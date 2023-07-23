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
  "make the structure",
  false
);

todo.tasks.push(firsttask);
project.todos.push(todo);
portfolio.projects.push(project);
firsttask.setTitle("new title");
firsttask.setDescription("new des");
firsttask.setDate("new date");
firsttask.setPrio("new prio");
firsttask.setNotes("new notes");
firsttask.check();
console.log(portfolio);
console.log(firsttask);