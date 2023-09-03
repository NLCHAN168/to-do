let projects = [];

//function that adds/removes todo node from DOM
function createTodoNode(todo) {
  let div = document.createElement("div");
  div.id = todo.name;
  let button = document.createElement("button");
  button.innerText = "remove";
  button.addEventListener("click", () => {
    projects = projects.filter((e) => e != todo);
    button.remove();
    let node = document.getElementById(div.id);
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
  div.appendChild(button);
  projects.push(todo);
  return div;
}

//function that adds/removes task node from dom
function createTaskNode(task, todo) {
  let tasknode = document.createElement("div");
  tasknode.id = task.title;
  let button = document.createElement("button");
  button.innerText = "remove";
  button.addEventListener("click", () => {
    todo.tasks.splice(todo.tasks.indexOf(task), 1);
    button.remove();
    let node = document.getElementById(tasknode.id);
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
  tasknode.appendChild(button);
  return tasknode;
}

export { projects, createTodoNode, createTaskNode };
