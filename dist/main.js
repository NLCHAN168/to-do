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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _portfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.js */ \"./src/portfolio.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\n\r\n\r\nconst portfolio = (0,_portfolio_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"My Projects\");\r\nconst project = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"The Odin Project\");\r\nconst todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"My to-do list\");\r\nconst firsttask = (0,_task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n  \"Make a new list\",\r\n  \"create a to-do list\",\r\n  \"03/08/2023\",\r\n  \"high\",\r\n  \"make the structure\",\r\n  false\r\n);\r\n\r\ntodo.tasks.push(firsttask);\r\nproject.todos.push(todo);\r\nportfolio.projects.push(project);\r\n// portfolio.removeProject(project);\r\nfirsttask.changeTitle(\"new title\");\r\nfirsttask.changeDes(\"new des\");\r\nfirsttask.changeDate(\"new date\");\r\nfirsttask.changePrio(\"new prio\");\r\nfirsttask.changeNotes(\"new notes\");\r\nfirsttask.check();\r\nconsole.log(portfolio);\r\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newPortfolio)\n/* harmony export */ });\nfunction newPortfolio(name) {\r\n  return {\r\n    name: name,\r\n    projects: [],\r\n    addProject(project) {\r\n      this.projects.push(project);\r\n    },\r\n    removeProject(project) {\r\n      for (let i = 0; i < this.projects.length; i++) {\r\n        if (this.projects[i] == project) {\r\n          this.projects.splice(i, 1);\r\n        }\r\n      }\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://to-do/./src/portfolio.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\nfunction newProject(name) {\r\n  return {\r\n    name: name,\r\n    todos: [],\r\n    addTodo(todo) {\r\n      this.todos.push(todo);\r\n    },\r\n    //getting owned trying to implement remove logic gg\r\n    removeTodo(todo) {\r\n      for (let i = 0; i < this.todos.length; i++) {\r\n        if (this.todos[i] == todo) {\r\n          this.todos.splice(i, 1);\r\n        }\r\n      }\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTask)\n/* harmony export */ });\nfunction createTask(\r\n  title,\r\n  description,\r\n  dueDate,\r\n  priority,\r\n  notes,\r\n  checklist\r\n) {\r\n  return {\r\n    title: title,\r\n    description: description,\r\n    dueDate: dueDate,\r\n    priority: priority,\r\n    notes: notes,\r\n    checklist: checklist,\r\n    changeTitle(newTitle) {\r\n      this.title = newTitle;\r\n    },\r\n    changeDes(newDes) {\r\n      this.description = newDes;\r\n    },\r\n    changeDate(newDate) {\r\n      this.dueDate = newDate;\r\n    },\r\n    changePrio(prio) {\r\n      this.priority = prio;\r\n    },\r\n    changeNotes(newNote) {\r\n      this.notes = newNote;\r\n    },\r\n    check() {\r\n      this.checklist = !checklist;\r\n    },\r\n    getTitle() {\r\n      return this.title;\r\n    },\r\n    getDes() {\r\n      return this.description;\r\n    },\r\n    getPrio() {\r\n      return this.prio;\r\n    },\r\n    getNotes() {\r\n      return this.notes;\r\n    },\r\n    getCheck() {\r\n      return this.checklist;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do/./src/task.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createToDo)\n/* harmony export */ });\nfunction createToDo(name) {\r\n  return {\r\n    name: name,\r\n    tasks: [],\r\n    changeName(newName) {\r\n      this.name = newName;\r\n    },\r\n    getName() {\r\n      return this.name;\r\n    },\r\n    addTask(task) {\r\n      this.tasks.push(task);\r\n    },\r\n    removeTask(task) {\r\n      for (let i = 0; i < this.tasks.length; i++) {\r\n        if (this.tasks[i].title == task) {\r\n          this.tasks.splice(i, 1);\r\n        }\r\n      }\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://to-do/./src/todo.js?");

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