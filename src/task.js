export default function createTask(
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist
) {
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
  this.title = newTitle;
}
function setDes(newDes) {
  this.description = newDes;
}
function setDate(newDate) {
  this.dueDate = newDate;
}
function setPrio(prio) {
  this.priority = prio;
}
function setNotes(newNote) {
  this.notes = newNote;
}
function check() {
  this.checklist = !checklist;
}

export { setTitle, setDes, setDate, setPrio, setNotes, check };
