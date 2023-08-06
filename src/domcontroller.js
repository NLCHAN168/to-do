import newPortfolio from "./portfolio.js";
import createToDo from "./todo.js";
import newProject from "./project.js";
import createTask from "./task.js";

const portfolio = newPortfolio("My Projects");
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

const tododiv = document.createElement("div");
tododiv.id = "todo";
const listdiv = document.createElement("div");

export default function addProjectDiv(title) {
  let newDiv = portfolio.addProject(title);
  let newDivTitle = title;
  let newTodo = createToDo(title);
  project.addTodo(newTodo);
  let projDiv = document.createElement("div");
  projDiv.id = newDivTitle;
  listdiv.appendChild(projDiv);
  return listdiv;
}
