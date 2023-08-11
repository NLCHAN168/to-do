// @ts-check
// Imports for data logic
import createPortfolio from "./portfolio.js"; // import createToDo from "./todo.js";
import newProject from "./project.js";
import createTask from "./task.js";
import createToDo from "./todo.js";
// Imports for DOM manipulation
import { createPortfolioDiv } from "./domcontroller.js"

const portfolio = createPortfolio("Portfolio");
const project = newProject("The Odin Project");
const todo = createToDo("My to-do list");
const firstTask = createTask(
    "Make a new list",
    "create a to-do list",
    "03/08/2023",
    "high",
    "make the structure",
    false
);
todo.addTask(createTask(
    "Some random task",
    "Some random description",
    "08/12/2023",
    "high",
    "Some random notes",
    false
));
todo.addTask(firstTask);
project.addTodo(todo);
portfolio.addProject(project);
portfolio.projects[0].todos[0].tasks[0].setDes("Some new description");
console.log(portfolio);

document.body.appendChild(createPortfolioDiv(portfolio));