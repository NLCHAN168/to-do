import createTask from "../src/task";

const task = createTask("TestTitle", "TestDescription", "03/08/2023", "high"
  , "TestNotes", false);

/*********************************
 * DEFAULT FUNCTIONALITY TESTING
*********************************/

test("Creating a task", () => {
  let temp = { ...task };
  expect(temp.title).toBe("TestTitle");
  expect(temp.description).toBe("TestDescription");
  expect(temp.dueDate).toBe("03/08/2023");
  expect(temp.priority).toBe("high");
  expect(temp.notes).toBe("TestNotes");
  expect(temp.checklist).toBe(false);
});

test("Changing title", () => {
  let temp = { ...task };
  let testTitle = "TestTitle2";
  temp.setTitle(testTitle);
  expect(temp.title).toBe(testTitle);
});

test("Changing description", () => {
  let temp = { ...task };
  let someNewDesc = "New Description";
  temp.setDes(someNewDesc)
  expect(temp.description).toBe(someNewDesc);
});

test("Changing due date", () => {
  let temp = { ...task };
  let testDate = "04/08/2023";
  temp.setDue(testDate);
  expect(temp.dueDate).toBe(testDate);
});

test("Changing priority", () => {
  let temp = { ...task };
  let testPrio = "high";
  temp.setPrio(testPrio);
  expect(temp.priority).toBe(testPrio);
});

test("Changing notes", () => {
  let temp = { ...task };
  let notes = "These are some random notes";
  temp.setNotes(notes)
  expect(temp.notes).toBe(notes);
});

test("Changing completion statusw", () => {
  let temp = { ...task };
  temp.check();
  expect(temp.checklist).toBe(true);
});

/************************
 * INVALID INPUT TESTING
*************************/

test("Throw on invalid date", () => {
  let temp = { ...task };
  let testDate = "something wrong";
  expect(() => temp.setDue(testDate)).toThrow("Invalid date format. Please use \"mm/dd/yyyy\"");
});

test("Throw on invalid priority", () => {
  let temp = { ...task };
  let testPriority = "important";
  expect(() => temp.setPrio(testPriority)).toThrow("Invalid priority, please use [low, medium, high, urgent]");
})