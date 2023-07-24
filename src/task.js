let title, description, dueDate, priority, notes, checklist;

function createTask(title, description, dueDate, priority, notes, checklist) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
}

function setTitle(newTitle) {
  return (title = newTitle);
}
function setDes(newDes) {
  return (description = newDes);
}
function setDate(newDate) {
  return (dueDate = newDate);
}
function setPrio(prio) {
  return (priority = prio);
}
function setNotes(newNote) {
  return (notes = newNote);
}
function check() {
  return (checklist = !checklist);
}

export { createTask, setTitle, setDes, setDate, setPrio, setNotes, check };
