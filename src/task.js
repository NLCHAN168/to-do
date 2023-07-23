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
    setTitle: function setTitle(newTitle) {
      this.title = newTitle;
    },
    setDescription: function setDes(newDes) {
      this.description = newDes;
    },
    setDate: function setDate(newDate) {
      this.dueDate = newDate;
    },
    setPrio: function setPrio(prio) {
      this.priority = prio;
    },
    setNotes: function setNotes(newNote) {
      this.notes = newNote;
    },
    check: function check() {
      this.checklist = !checklist;
    }
  };
}
