import createTodo from "../src/todo.js";
import createTask from "../src/task.js";

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
  let task = createTask("TestTitle", "TestDescription", "03/08/2023", "high"
    , "TestNotes", false);
  todo.addTask({ ...task });
  task.setDes("bs");
  expect(todo.tasks[0]).not.toEqual(task);
})