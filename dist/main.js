/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _portfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.js */ \"./src/portfolio.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\n// import createTask, {\r\n//   setTitle,\r\n//   setDes,\r\n//   setDate,\r\n//   setPrio,\r\n//   setNotes,\r\n//   check,\r\n// } from \"./task.js\";\r\n\r\nconst portfolio = (0,_portfolio_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"My Projects\");\r\nconst project = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"The Odin Project\");\r\nconst todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"My to-do list\");\r\nconst firsttask = _task_js__WEBPACK_IMPORTED_MODULE_3__.createTask(\r\n  \"Make a new list\",\r\n  \"create a to-do list\",\r\n  \"03/08/2023\",\r\n  \"high\",\r\n  \"make the structure\",\r\n  false\r\n);\r\ntodo.tasks.push(firsttask);\r\nproject.todos.push(todo);\r\nportfolio.projects.push(project);\r\nfirsttask.title = _task_js__WEBPACK_IMPORTED_MODULE_3__.setTitle(\"new title\");\r\nfirsttask.description = _task_js__WEBPACK_IMPORTED_MODULE_3__.setDes(\"new des\");\r\nfirsttask.dueDate = _task_js__WEBPACK_IMPORTED_MODULE_3__.setDate(\"new date\");\r\nfirsttask.priority = _task_js__WEBPACK_IMPORTED_MODULE_3__.setPrio(\"new prio\");\r\nfirsttask.notes = _task_js__WEBPACK_IMPORTED_MODULE_3__.setNotes(\"new notes\");\r\nfirsttask.checklist = _task_js__WEBPACK_IMPORTED_MODULE_3__.check();\r\nconsole.log(portfolio);\r\nconsole.log(firsttask);\r\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   \"default\": () => (/* binding */ newPortfolio),\n/* harmony export */   removeProject: () => (/* binding */ removeProject)\n/* harmony export */ });\nfunction newPortfolio(name) {\r\n  return {\r\n    name: name,\r\n    projects: [],\r\n  };\r\n}\r\nfunction addProject(project) {\r\n  this.projects.push(project);\r\n}\r\nfunction removeProject(project) {\r\n  for (let i = 0; i < this.projects.length; i++) {\r\n    if (this.projects[i] == project) {\r\n      this.projects.splice(i, 1);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/portfolio.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   \"default\": () => (/* binding */ newProject),\n/* harmony export */   removeTodo: () => (/* binding */ removeTodo)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\nfunction newProject(name) {\r\n  return {\r\n    name: name,\r\n    todos: [],\r\n  };\r\n}\r\n\r\nfunction addTodo(todo) {\r\n  this.todos.push(todo);\r\n}\r\n\r\n//getting owned trying to implement remove logic gg\r\nfunction removeTodo(todo) {\r\n  for (let i = 0; i < this.todos.length; i++) {\r\n    if (this.todos[i] == todo) {\r\n      this.todos.splice(i, 1);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   check: () => (/* binding */ check),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   setDate: () => (/* binding */ setDate),\n/* harmony export */   setDes: () => (/* binding */ setDes),\n/* harmony export */   setNotes: () => (/* binding */ setNotes),\n/* harmony export */   setPrio: () => (/* binding */ setPrio),\n/* harmony export */   setTitle: () => (/* binding */ setTitle)\n/* harmony export */ });\nlet title, description, dueDate, priority, notes, checklist;\r\n\r\nfunction createTask(title, description, dueDate, priority, notes, checklist) {\r\n  return {\r\n    title,\r\n    description,\r\n    dueDate,\r\n    priority,\r\n    notes,\r\n    checklist,\r\n  };\r\n}\r\n\r\nfunction setTitle(newTitle) {\r\n  return (title = newTitle);\r\n}\r\nfunction setDes(newDes) {\r\n  return (description = newDes);\r\n}\r\nfunction setDate(newDate) {\r\n  return (dueDate = newDate);\r\n}\r\nfunction setPrio(prio) {\r\n  return (priority = prio);\r\n}\r\nfunction setNotes(newNote) {\r\n  return (notes = newNote);\r\n}\r\nfunction check() {\r\n  return (checklist = !checklist);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/task.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   changeName: () => (/* binding */ changeName),\n/* harmony export */   \"default\": () => (/* binding */ createToDo),\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\nfunction createToDo(name) {\r\n  return {\r\n    name: name,\r\n    tasks: [],\r\n  };\r\n}\r\n\r\nfunction changeName(newName) {\r\n  this.name = newName;\r\n}\r\n\r\nfunction addTask(task) {\r\n  this.tasks.push(task);\r\n}\r\n\r\nfunction removeTask(task) {\r\n  for (let i = 0; i < this.tasks.length; i++) {\r\n    if (this.tasks[i].title == task) {\r\n      this.tasks.splice(i, 1);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;