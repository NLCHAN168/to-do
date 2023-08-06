// @ts-check

// import createPortfolio from "./portfolio.js";
// import createToDo from "./todo.js";
// import newProject from "./project.js";
// import createTask from "./task.js";
// const portfolio = createPortfolio("My Projects");
// const project = newProject("The Odin Project");
// const todo = createToDo("My to-do list");
// const firstTask = createTask(
//   "Make a new list",
//   "create a to-do list",
//   "03/08/2023",
//   "high",
//   "make the structure",
//   false
// );
// todo.addTask(firstTask);
// project.addTodo(todo);
// portfolio.addProject(project);
// portfolio.projects[0].todos[0].tasks[0].setDes("Some new description");
// console.log(portfolio);

import addProjectDiv from "./domcontroller.js";

const firstProject = addProjectDiv("First Project");
console.log(firstProject);
