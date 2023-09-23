// @ts-check
import {
  //   projects,
  createTaskNode,
  createTodoNode,
  addTodo,
} from "./domcontroller.js";
import createToDo from "./todo.js";
import createTask from "./task.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const projectdiv = document.createElement("div");
projectdiv.id = "projects";
const todoButton = document.createElement("button");
todoButton.innerText = "Add New Todo";
todoButton.addEventListener("click", () => {
  addTodo();
});
document.body.appendChild(todoButton);
document.body.appendChild(projectdiv);
let defaulttodo = createToDo("default todo");
let defaulttask = createTask("default task", "default description", new Date());
let newTodoNode = createTodoNode(defaulttodo);
newTodoNode.appendChild(createTaskNode(defaulttask, defaulttodo));
projectdiv.appendChild(newTodoNode);
