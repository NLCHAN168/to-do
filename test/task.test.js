import createTask from "../src/task";

const task = createTask("TestTitle", "TestDescription", "03/08/2023", "high"
  , "TestNotes", false);

test("Creating a task", () => {
  const task = createTask("TestTitle", "TestDescription", "03/08/2023", "high"
    , "TestNotes", false);
  expect(task.title).toBe("TestTitle");
  expect(task.description).toBe("TestDescription");
  expect(task.dueDate).toBe("03/08/2023");
  expect(task.priority).toBe("high");
  expect(task.notes).toBe("TestNotes");
  expect(task.checklist).toBe(false);
});

test("Changing title", () => {
  let temp = { ...task };
  temp.setTitle("TestTitle2");
  expect(temp.title).toBe("TestTitle2");
});

test.skip("Changing description", () => {
  let temp = { ...task };
  expect(temp.description).toBe("New Description");
});

test.skip("Changing due date", () => {
  let temp = { ...task };
  expect(temp.dueDate).toBe("04/08/2023");
});

test.skip("Changing priority", () => {
  let temp = { ...task };
  expect(temp.priority).toBe("low");
});

test.skip("Changing notes", () => {
  let temp = { ...task };
  expect(temp.notes).toBe("New Notes");
});

test.skip("Changing checklist", () => {
  let temp = { ...task };
  expect(temp.checklist).toBe(false);
});
