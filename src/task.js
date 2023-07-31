export default function createTask(title, description, dueDate, priority, notes, checklist) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    setTitle(newTitle) {
      this.title = newTitle;
    },
    setDes(newDes) {
      this.description = newDes;
    },
    setDate(newDate) {
      this.dueDate = newDate;
    },
    setPrio(newPrio) {
      this.priority = newPrio;
    },
    setNotes(newNotes) {
      this.notes = newNotes;
    },
    check() {
      this.checklist = !this.checklist;
    }
  };
}