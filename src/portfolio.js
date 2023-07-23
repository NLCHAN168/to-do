export default function newPortfolio(name) {
  return {
    name: name,
    projects: [],
  };
}
function addProject(project) {
  this.projects.push(project);
}
function removeProject(project) {
  for (let i = 0; i < this.projects.length; i++) {
    if (this.projects[i] == project) {
      this.projects.splice(i, 1);
    }
  }
}

export { addProject, removeProject };
