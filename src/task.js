/*export default function createTask(
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
  }
}
*/
const createTask = (title, description, dueDate, priority, notes, checklist) => {
  let check = () => checklist = !checklist;
  return {title, description, dueDate, priority, notes, checklist: false, check}
};

export {createTask};