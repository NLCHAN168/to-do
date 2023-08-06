/**
 * @typedef {import("./project.js").Project} Project
 */

/**
 * @typedef {object} Portfolio
 * @property {string} name - Name of portfolio
 * @property {Project[]} projects - Array of projects
 * @property {function} addProject
 * @property {function} removeProject
 */

export default function newPortfolio(name) {
  /**
   * @returns {Portfolio}
   */
  return {
    name: name,
    projects: /**@type {Project[]} */ ([]),
    addProject(project) {
      this.projects.push(project);
    },
    removeProject(project) {
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i] === project) {
          this.projects.splice(i, 1);
        }
      }
    },
  };
}
