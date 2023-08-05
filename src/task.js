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
      if (!this.isValidDate(newDate)) {
        throw new Error("Invalid date format. Please use \"mm/dd/yyyy\"");
      }
      this.dueDate = newDate;
    },
    /**
     * Sets priority of the task, can throw an error if the priority is invalid
     * @param {string} newPrio priority (has to be either low, medium, high or urgent)
     * @returns {void | Error} either throws an error changes the priority
    */
    setPrio(newPrio) {
      let validPriorities = ["low", "medium", "high", "urgent"];
      if (!validPriorities.includes(newPrio)) {
        throw new Error("Invalid priority, please use [low, medium, high, urgent]");
      }
      this.priority = newPrio;
    },
    setNotes(newNotes) {
      this.notes = newNotes;
    },
    check() {
      this.checklist = !this.checklist;
    },
    /**
     * This function should return a boolean if the date format is correct.
     * @param {string} date the date representing the string
     * @returns {boolean} boolean representing if the input string valid or not
    */
    isValidDate(date) {
      // TODO: Implement input validation
      return false;
    },
  };
}