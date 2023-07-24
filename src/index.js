import createPortfolio from "./portfolio.js";
import createToDo from "./todo.js";
import newProject from "./project.js";
// import createTask, {
//   setTitle,
//   setDes,
//   setDate,
//   setPrio,
//   setNotes,
//   check,
// } from "./task.js";
import * as tasks from "./task.js";
const portfolio = createPortfolio("My Projects");
const project = newProject("The Odin Project");
const todo = createToDo("My to-do list");
const firsttask = tasks.createTask(
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
firsttask.title = tasks.setTitle("new title");
firsttask.description = tasks.setDes("new des");
firsttask.dueDate = tasks.setDate("new date");
firsttask.priority = tasks.setPrio("new prio");
firsttask.notes = tasks.setNotes("new notes");
firsttask.checklist = tasks.check();
console.log(portfolio);
console.log(firsttask);
