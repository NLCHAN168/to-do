export default function createTask(
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist
) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
    checklist: false,
    check() {
      if (checklist == false) {
        checklist = true;
      }
      else {
        checklist = false;
      }
    }
  }
}