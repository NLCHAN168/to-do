// @ts-check
import { projects, createTaskNode, createTodoNode } from "./domcontroller.js";
import createToDo from "./todo.js";
import createTask from "./task.js";

const projectdiv = document.createElement("div");
projectdiv.id = "projects";
document.body.appendChild(projectdiv);
let defaulttodo = createToDo("default todo");
let defaulttask = createTask("default task");
let newTodoNode = createTodoNode(defaulttodo);
newTodoNode.appendChild(createTaskNode(defaulttask, defaulttodo));
projectdiv.appendChild(newTodoNode);
