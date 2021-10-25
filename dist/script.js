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

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].id === this[i].nextElementSibling.dataset.toggleId) {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).fadeToggle();
    }
  }

  return this;
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-toggle").click(function (e) {
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).dropdown();
});

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.openModal = function () {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].dataset.target;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(400);
      document.body.style.overflow = "hidden";
    });
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closeModal = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      if (e.target.classList.contains("modal") || e.target.dataset.close === "") {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".modal").fadeOut(400);
        document.body.style.overflow = "";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle='modal']").openModal();
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-close]").closeModal();
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".modal").closeModal();

/***/ }),

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
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animation */ "./src/js/lib/modules/animation.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
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
 //1 set/get inner.HTML

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (item) {
      this[i].innerHTML = item;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
}; //2 find element at it index


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (num) {
  const swap = this[num];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
}; //3 get index of element


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item === this[0];
  };

  return childs.findIndex(findMyIndex);
}; //4 get element at its class


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector); //создаем при каждой итерации

    if (arr.length === 0) {
      //если ничего не пришло - пропускаем
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      //если пришло,то перезаписываем
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
}; //5


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
}; //6


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getSiblingAll = function () {
  const parent = this[0].parentElement; //get element`s parent

  if (parent.childElementCount === 1) {
    //if there aren`t some sibling elements
    return this;
  }

  const arr = []; //create empty array

  for (let i = 0; i < parent.childElementCount; i++) {
    if (i !== this.index()) {
      //i === number of elements and when i !== index of our element continue
      arr.push(parent.children[i]);
    }
  }

  for (let j = 0; j < arr.length; j++) {
    this[j] = arr[j]; //here is object no array
  }

  this.length = arr.length;
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/animation.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/animation.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, fin) {
  let timeStart; //запускается каждый раз и получает аргумент time из браузера
  //в первый запуск записываем time в timeStart как стартовое время

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    } //от времени из браузера time (меняется каждую итерацию) каждый раз отнимаем время начала анимации


    let timeElapsed = time - timeStart; //вычисляется изменение opacity и меняется. как только станет >, то 1 opacity = 1

    let complection = Math.min(timeElapsed / duration, 1);
    callback(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }

  return _animateOverTime;
}; //1
//вариант из урока


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || "block"; //еще один способ задать параметры по-умолчанию

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(duration, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
}; //рабочий вариант с Web Animations API


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInAPI = function () {
  function _fadeInAPI(elem, duration = 800, iterate = 1) {
    const opacity = [{
      opacity: "0",
      offset: 0
    }, {
      opacity: "1",
      offset: 1
    }];
    const timing = {
      duration: duration,
      iterations: iterate
    };
    return elem.animate(opacity, timing);
  }

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    _fadeInAPI(element, 800, 1);
  }

  return this;
}; //2
//варинат из урока


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = "none";
      }
    };

    const ani = this.animateOverTime(duration, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
}; //рабочий вариант с Web Animations API


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOutAPI = function (duration = 800) {
  function _fadeOutAPI(elem, duration = 800, iterate = 1) {
    const opacity = [{
      opacity: "1",
      offset: 0
    }, {
      opacity: "0",
      offset: 1
    }];
    const timing = {
      duration: duration,
      iterations: iterate
    };
    return elem.animate(opacity, timing);
  }

  for (let i = 0; i < this.length; i++) {
    const elem = this[i];

    _fadeOutAPI(elem, 800, 1);

    setTimeout(() => {
      elem.style.display = "none";
    }, duration);
  }

  return this;
}; //3


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur = 400, display = "block") {
  for (let i = 0; i < this.length; i++) {
    window.getComputedStyle(this[i]).display === "none" ? Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(dur, display) : Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(dur);
  }

  return this;
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
    if (!this[i]) {
      continue;
    } else {
      this[i].classList.add(...classNames);
    }
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


/***/ })

/******/ });
//# sourceMappingURL=script.js.map