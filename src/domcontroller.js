/**
 * @typedef {import('./task.js').Task} Task
 * @typedef {import('./project.js').Project} Project
 * @typedef {import('./todo.js').Todo} Todo
 * @typedef {import('./portfolio.js').Portfolio} Portfolio
 */
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

/**
 * @param {Task} task 
 * @returns {HTMLDivElement} Returns handle to the div holding current task
 */
export function createTaskDiv(task) {
  let div = document.createElement('div');
  let titleDiv = document.createElement('div');
  titleDiv.innerText = task.title;
  div.appendChild(titleDiv);
  return div;
}

/**
 * @param {Todo} todo
 * @returns {HTMLDivElement} Returns handle to the div holding all the tasks
 */
export function createTodoDiv(todo) {
  let div = document.createElement('div');
  let titleDiv = document.createElement('div');
  titleDiv.innerText = todo.name;
  div.appendChild(titleDiv);
  for (let task of todo.tasks) {
    div.appendChild(createTaskDiv(task));
  }
  return div;
}

/**
 * @param {Project} project 
 * @returns {HTMLDivElement} Returns a handle to the container for the project div
 */
export function createProjectDiv(project) {
  let div = document.createElement('div');
  let titleDiv = document.createElement('div');
  titleDiv.innerText = project.name;
  div.appendChild(titleDiv);
  for (let todo of project.todos) {
    div.appendChild(createTodoDiv(todo));
  }
  return div;
}

/**
 * @param {Portfolio} portfolio
 * @returns {HTMLDivElement} Returns a handle to the div containing the entire portfolio
 */
export function createPortfolioDiv(portfolio) {
  let div = document.createElement('div');
  let titleDiv = document.createElement('div');
  titleDiv.innerText = portfolio.name;
  div.appendChild(titleDiv);
  for (let project of portfolio.projects) {
    div.appendChild(createProjectDiv(project));
  }
  return div;
}


