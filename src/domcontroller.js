import createTask from "./task.js";
import createToDo from "./todo.js";

let projects = [];

//function that adds/removes todo node from DOM
function createTodoNode(todo) {
  let div = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "check";
  let label = document.createElement("label");
  label.setAttribute("for", "check");
  div.id = todo.name;
  label.innerText = todo.name;
  let rmv = document.createElement("button");
  rmv.innerText = "Completed";
  rmv.addEventListener("click", () => {
    projects = projects.filter((e) => e != todo);
    rmv.remove();
    let node = document.getElementById(div.id);
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(rmv);
  let add = document.createElement("button");
  add.innerText = "New Task";
  //button that adds a task current todo list
  add.addEventListener("click", () => {
    const newTask = prompt("New Task");
    if (newTask.length > 0) {
      const task = createTask(newTask);
      todo.tasks.push(task);
      div.appendChild(createTaskNode(task, todo));
    }
  });
  div.appendChild(add);
  projects.push(todo);
  return div;
}

//function that adds/removes task node from dom
function createTaskNode(task, todo) {
  let tasknode = document.createElement("div");
  let checkbox = document.createElement("input");
  let label = document.createElement("label");
  label.innerText = task.title;
  checkbox.type = "checkbox";
  tasknode.id = task.title;
  let button = document.createElement("button");
  button.innerText = "Remove";
  button.addEventListener("click", () => {
    todo.tasks.splice(todo.tasks.indexOf(task), 1);
    button.remove();
    let node = document.getElementById(tasknode.id);
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
  tasknode.appendChild(checkbox);
  tasknode.appendChild(label);
  tasknode.appendChild(button);
  return tasknode;
}

function addTodo() {
  let name = prompt("New Todo");
  if (name.length > 0) {
    let newTodo = createToDo(name);
    document.body.appendChild(createTodoNode(newTodo));
  }
}

export { projects, createTodoNode, createTaskNode, addTodo };
