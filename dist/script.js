/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //{}
  }

  if (selector.tagName) {
    //если передаем тэг 
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype; //в прототип возвращаемого this записываем прототип главной функции

window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
//файл экспортов всего для сбора библиотеки
//тут обогащается $ методами из разных модулей






/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //1

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (item) {
      this[i].innerHTML = item;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
}; //2


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (num) {
  const swap = this[num];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
}; //3


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item === this[0];
  };

  return childs.findIndex(findMyIndex);
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //1

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAttribute = function (item, value) {
  if (!item || !value) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(item, value);
  }

  return this;
}; //2


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (item) {
  if (!item) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(item);
  }

  return this;
}; //3


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hasAttribute = function (item) {
  if (!item) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    return this[i].hasAttribute(item);
  }
}; //4


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hasAttributeAll = function (item) {
  if (!item) {
    return this;
  }

  let obj = {};

  for (let i = 0; i < this.length; i++) {
    obj[`${this[i]} ${i}`] = this[i].hasAttribute(item);
  }

  return obj;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //1

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  if (classNames.length === 0) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
}; //2


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  if (classNames.length === 0) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
}; //3


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  if (!className) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
//файл для работы со свойством display
 //1

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "";
  }

  return this;
}; //2


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "none";
  }

  return this;
}; //3


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === "none") {
      this[i].style.display = "";
    } else {
      this[i].style.display = "none";
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //1

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addEvent = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
}; //2


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeEvent = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
}; //3


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback) {
      return this[i].click();
    } else {
      this[i].addEventListener("click", callback);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

let elem = $(".second").find(0);
console.log(elem);
elem.click(function () {
  console.log($(this).html());
});
$("div").click(function () {
  console.log($(this).index());
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map