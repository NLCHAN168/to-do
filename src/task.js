/**
 * @typedef {object} Task
 * @property {string} title - The title of the task.
 * @property {string} description - The description of the task.
 * @property {string} dueDate - The due date of the task.
 * @property {string} priority - The priority of the task.
 * @property {string} notes - The notes for the task.
 * @property {boolean} checklist - The checklist for the task.
 * @property {function} setTitle
 * @property {function} setDes
 * @property {function} setDue
 * @property {function} setPrio
 * @property {function} setNotes
 * @property {function} check - Toggles completion state of the task.
 * @property {function} isValidDate
 */

/**
 * Function Factory to return a Task object
 * @param {string} title
 * @param {string} [description]
 * @param {string} [dueDate="01/01/2024"] - Date should be in "mm/dd/yyyy" format
 * @param {string} [priority="low"] - Should be "low", "high", "medium" or "urgent"
 * @param {string} [notes]
 * @param {boolean} [checklist=false]
 */
export default function createTask(title, description = "", dueDate = "01/01/2024", priority = "low", notes = "", checklist = false) {

  /**
   * @returns {Task}
   */

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    /**
     * Sets the title of the object to a new value.
     * @param {string} newTitle - The new title to set.
     */
    setTitle(newTitle) {
      this.title = newTitle;
    },
    /**
     * Sets the description to a new value.
     * @param {string} newDes - The new description.
     */
    setDes(newDes) {
      this.description = newDes;
    },
    /**
     * Sets a new target date for the task.
     * @param {string} newDate 
     * @throws {Error} Will throw an error if the date format isn't "mm/dd/yyyy".
     */
    setDue(newDate) {
      if (!this.isValidDate(newDate)) {
        throw new Error("Invalid date format. Please use \"mm/dd/yyyy\"");
      }
      this.dueDate = newDate;
    },
    /**
     * Set new priority for task. 
     * @param {string} newPrio 
     * @throws {Error} Will throw if priority isn't "low", "medium", "high", or "urgent".
     */
    setPrio(newPrio) {
      let validPriorities = ["low", "medium", "high", "urgent"];
      if (!validPriorities.includes(newPrio)) {
        throw new Error("Invalid priority, please use [low, medium, high, urgent]");
      }
      this.priority = newPrio;
    },
    /**
     * Replace old notes with new notes in the task.
     * @param {string} newNotes 
     */
    setNotes(newNotes) {
      this.notes = newNotes;
    },
    check() {
      this.checklist = !this.checklist;
    },
    /**
   * Function to check if the format of the date is valid
   * @param {string} date - The date to validate.
   * @returns {boolean} Returns true if the date is valid, false otherwise.
   */
    isValidDate(date) {
      const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
      return dateRegex.test(date);
    },
  };
}
