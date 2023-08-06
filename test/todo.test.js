import createTodo from "../src/todo.js";
import createTask from "../src/task.js";


let injectorTask = createTask("Title", "Desc", "05/05/2024", "low", "Some notes", false);

test("Creating a todo", () => {
  let todo = createTodo("Nick");
  expect(todo.name).toBe("Nick");
});

test("Change name of a todo", () => {
  let todo = createTodo("Nick");
  todo.changeName("Nick2");
  expect(todo.name).toBe("Nick2");
});

test("Adding a task to a todo", () => {
  let todo = createTodo("Nick");
  let temp = { ...injectorTask };
  todo.addTask(temp);
  expect(todo.tasks[0]).toEqual(temp);
})

test("Removing a task", () => {
  let todo = createTodo("Nick");
  let temp = { ...injectorTask };
  todo.addTask(temp);
  todo.removeTask(temp);
  expect(todo.tasks.length).toEqual(0);
});

test("Removing first task and shifting second into first slot", () => {
  let todo = createTodo("Nick");
  let temp = { ...injectorTask };
  let temp2 = { ...injectorTask };
  todo.addTask(temp);
  todo.addTask(temp2);
  todo.removeTask(temp);
  expect(todo.tasks[0]).toEqual(temp2);
});