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
  temp.setDate(testDate);
  expect(temp.dueDate).toBe(testDate);
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

/************************
 * INVALID INPUT TESTING
*************************/

test.skip("Throw on invalid date", () => {
  let temp = { ...task };
  let testDate = "something wrong";
  expect(() => temp.setDate(testDate)).toThrow("Invalid date format. Please use \"mm/dd/yyyy\"");
});