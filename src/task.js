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
    checklist: checklist,
    changeTitle(newTitle) {
      this.title = newTitle;
    },
    changeDes(newDes) {
      this.description = newDes;
    },
    changeDate(newDate) {
      this.dueDate = newDate;
    },
    changePrio(prio) {
      this.priority = prio;
    },
    changeNotes(newNote) {
      this.notes = newNote;
    },
    check() {
      this.checklist = !checklist;
    },
    getTitle() {
      return title;
    },
    getDes() {
      return description;
    },
    getPrio() {
      return prio;
    },
    getNotes() {
      return notes;
    },
    getCheck() {
      return checklist;
    }
  }
}