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

/***/ "./src/js/lib/components/accordeon.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordeon.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAccodreon = function ({
  elements = [],
  collapseAll = true
} = {}) {
  elements.forEach(value => {
    //динамически создаем элементы аккордеона
    this[0].innerHTML += `   <p class="accordeon-heading">${value[0]}</p>
                <div class="accordeon-block">
                    <div class="accordeon-inner">
                        ${value[1]}
                    </div>
                </div>`;
  });
  const trigger = document.querySelectorAll(".accordeon-heading");
  const items = document.querySelectorAll(".accordeon-block");

  for (let i = 0; i < items.length; i++) {
    trigger[i].addEventListener("click", () => {
      if (!items[i].classList.contains("accordeon-block-active")) {
        if (collapseAll) {
          items.forEach((item, index) => {
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(item).removeClass("accordeon-block-active");
            item.style.maxHeight = 0;
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(trigger[index]).removeClass("accordeon-active");
          });
        }

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(trigger[i]).addClass("accordeon-active");
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(items[i]).addClass("accordeon-block-active");
        items[i].style.maxHeight = `${items[i].scrollHeight}px`;
      } else {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(trigger[i]).removeClass("accordeon-active");
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(items[i]).removeClass("accordeon-block-active");
        items[i].style.maxHeight = 0;
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".accordeon").toggleAccodreon({
  elements: [["Вопрос первый", "Анний из Витербо (итал. Annio da Viterbo, лат. Joannes Annius Viterb(i)ensis), 1432 или 1437—1502) — итальянский богослов и историк, член ордена доминиканцев. Анний известен как фальсификатор исторических источников, опубликованных им в 1498 году в снабжённом комментариями сборнике документов «Commentaria super opera diversorum auctorum de antiquitatibus loquentium». Книга произвела научную сенсацию и обсуждалась до XVIII века. В настоящее время Анний и его подделки изучаются с точки зрения понимания научной культуры эпохи Возрождения и развития исторической методологии."], ["Вопрос второй", "На основе поддельных исторических хроник и надписей Анний предложил концепцию мировой истории от Адама до Средних веков, в рамках которой его родной город Витербо играл центральную роль. Назначением исторической методологии было представить фальсифицированные им источники как наиболее достоверные. Достоверными, согласно Аннию, являются записи государственных архивов и публичных библиотек, созданные и широкодоступные во времена описываемых в них событий. Наиболее авторитетными источниками Анний называл данные ономастики и эпиграфики, тогда как исторический нарратив, прежде всего созданный греческой историографией, он полагал заведомо ложным. Особенностью методологии Анния был эвгемеризм, отождествление мифологических персонажей с историческими деятелями. В опубликованных в 1492—1499 годах Аннием трактатах основателями этрусской и мировой цивилизации назывались Осирис и Ной. Около 1493 года Анний открыл для себя труды халдея Бероса, назвав его величайшим из варварских историков. Его труды, дополненные другими источниковедческими «открытиями», стали лейтмотивом аннианской псевдоистории, основным элементом которой является доказательство величия доримской цивилизации. Ссылаясь на Бероса, Анний утверждал, что на 108 году после потопа Ной со своими потомками прибыл в Италию и основал цивилизацию с центрами в Витербо и Ватикане. Опровержения «трудов» Анния появились уже в начале XVI века, однако разоблачители не были едины в своей позиции и не всегда отвергали труды доминиканца целиком и полностью. До XVIII века у аннианской хронологии находились последователи и защитники."], ["Вопрос третий", "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века."]],
  collapseAll: false
});

/***/ }),

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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closeModal = function (target) {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      console.log(e.target);

      if (e.target.dataset.close === "") {
        if (e.target.classList.contains("dynamic")) {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(400);
          document.body.style.overflow = "";
          document.body.removeChild(document.querySelector(target));
        } else {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(400);
          document.body.style.overflow = "";
        }
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle='modal']").openModal();
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-close]").closeModal(".modal"); //btns = {count: num, settings: [[text, classNames=[], close, callback]]}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.setAttribute("id", this[i].dataset.target.slice(1));
    modal.classList.add("modal", "dynamic");
    modal.setAttribute("data-close", "");
    modal.innerHTML = `
                <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close">
                        <span class="dynamic" data-close>&times;</span>
                    </button>

                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                            ${text.title}
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        `; //innerHTML

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      let [text, classes, close, cb] = btns.settings[j];
      btn.innerText = text;
      btn.classList.add("btn", ...classes);

      if (close === true) {
        btn.setAttribute("data-close", "");
      }

      if (cb && typeof (cb === "function")) {
        btn.addEventListener("click", cb);
      }

      buttons.push(btn);
    }

    document.body.append(modal);
    modal.querySelector(".modal-footer").append(...buttons);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).fadeIn(400);
    modal.querySelectorAll("[data-close]").forEach(btn => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).closeModal(`#${modal.id}`);
    });
  }
}; //createModal


Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("#testTrigger").click(function (e) {
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("#testTrigger").createModal({
    text: {
      title: "Test Modal Title #2",
      body: "Test Modal Body #2"
    },
    btns: {
      count: 2,
      settings: [["Close #2", ["btn-danger", "dynamic"], true], ["Safe changes #2", ["btn-success"], false]]
    }
  });
});

/***/ }),

/***/ "./src/js/lib/components/progressbar.js":
/*!**********************************************!*\
  !*** ./src/js/lib/components/progressbar.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setProgressBar = function (wrapperHeight, colorProgressBar) {
  for (let i = 0; i < this.length; i++) {
    const progressbar = document.createElement("div");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(progressbar).addClass("progressbar");
    progressbar.style.width = "inherit";
    progressbar.style.maxWidth = "inherit";
    const wrapper = document.createElement("div");
    wrapper.style.cssText = `
            width: inherit;
            max-width: inherit;
            height: ${wrapperHeight}px;
            position: fixed;
            opacity: .7;
            z-index: 15;
        `;
    const innerProgressBar = document.createElement("div");
    innerProgressBar.style.cssText = `
            width: 0%;
            height: 100%;
            background-color: ${colorProgressBar};
        `;
    wrapper.appendChild(innerProgressBar);
    progressbar.appendChild(wrapper);
    this[i].insertBefore(progressbar, this[i].firstElementChild);
    const step = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset / step < 100) {
        innerProgressBar.style.width = `${window.pageYOffset / step}%`;
      } else {
        innerProgressBar.style.width = innerProgressBar.style.width;
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".container").setProgressBar(5, "red");

/***/ }),

/***/ "./src/js/lib/components/slider.js":
/*!*****************************************!*\
  !*** ./src/js/lib/components/slider.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.slider = function ({
  images = [],
  autoplay = {
    value: false,
    infinity: true,
    speed: 3000,
    sliderStopHover: true
  },
  dots = true,
  //точки слайдера
  axis = "horizontal",
  //направление
  counter = false
} = {}) {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width; //ширина родителя

    const height = window.getComputedStyle(this[i].querySelector(".carousel-inner")).height; //высота родителя

    const slidesField = this[i].querySelector(".carousel-slides"); //div слайдеров

    let counterField = null;
    let offset = 0;
    let index = 0;
    let interval = null;
    let dotsArray = [];
    let offsetValue = null; //динамическое создание картинок

    for (let i = 0; i < images.length; i++) {
      slidesField.innerHTML += `
                <div class="carousel-item">
                    <img src=${images[i][0]} alt=${images[i][1]}>
                </div>
            `;
    }

    const slides = this[i].querySelectorAll(".carousel-item"); //количество слайдов

    if (axis === "vertical") {
      //если направление вертикальное
      slidesField.style.display = "flex";
      slidesField.style.flexDirection = "column";
      slidesField.style.height = 100 * slides.length + "%"; //смещаем слайды на значение высоты родителя

      offsetValue = +height.replace(/\D/g, "") * (slides.length - 1);
    } else {
      //horizontal
      slidesField.style.width = 100 * slides.length + "%"; //ставим ширину обертки
      //смещаем слайды на значение ширины родителя

      offsetValue = +width.replace(/\D/g, "") * (slides.length - 1);
    }

    slides.forEach(item => {
      //все слайды в один размер по ширине и высоте
      item.style.height = height;
      item.style.width = width;
    });

    const initCounter = () => {
      //счетчик слайдеров типа 1/4
      if (counter) {
        if (!counterField) {
          //если не создано то создаем
          counterField = document.createElement("div"); //div счетчика

          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(counterField).addClass("carousel-counter");
          this[i].append(counterField);
          counterField.style.display = "flex";
          counterField.innerHTML = `<p>${index + 1} / ${slides.length}</p>`;
        } else {
          //если создано просто меняем
          counterField.innerHTML = `<p>${index + 1} / ${slides.length}</p>`;
        }
      }
    };

    initCounter();

    const toggleSlides = function () {
      //переключаем слайды
      //если направление вертикальное, то вниз; иначе вправо
      slidesField.style.transform = axis === "vertical" ? `translateY(-${offset}px)` : `translateX(-${offset}px)`;

      try {
        dotsArray.forEach(dot => {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(dot).getSiblingAll().removeClass("active");
          dotsArray[index].classList.add("active");
        });
      } catch (e) {}

      initCounter();
    };

    const initSlides = function (toNext = true) {
      if (!toNext) {
        //листаем назад
        if (offset === 0) {
          offset = offsetValue;
          index = slides.length - 1;
        } else {
          offset -= axis === "vertical" ? +height.replace(/\D/g, "") : +width.replace(/\D/g, "");
          index--;
        }
      } else {
        //листаем вперед
        if (offset === offsetValue) {
          offset = 0;
          index = 0;
        } else {
          offset += axis === "vertical" ? +height.replace(/\D/g, "") : +width.replace(/\D/g, "");
          index++;
        }
      }

      toggleSlides();
    };

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();
      initSlides();
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault();
      initSlides(false);
    });

    if (dots) {
      //если точки включены -- создаем
      const dotsWrapper = this[i].querySelector(".carousel-indicators");

      for (let j = 0; j < slides.length; j++) {
        const dot = document.createElement("li");
        dotsWrapper.append(dot);
        dotsArray.push(dot);
      }

      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(dotsArray[0]).addClass("active");
      dotsArray.forEach((dot, i) => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(dot).click(() => {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(dot).getSiblingAll().removeClass("active");
          dotsArray[i].classList.add("active");
          offset = i * (axis === "vertical" ? +height.replace(/\D/g, "") : +width.replace(/\D/g, ""));
          index = i;
          slidesField.style.transform = axis === "vertical" ? `translateY(-${offset}px)` : `translateX(-${offset}px)`;
          initCounter();
        });
      });
    }

    if (autoplay.value) {
      //если автопрокрутка -- крутим
      let flag = false; //отметка того, что слайдер уже был прокручен до конца

      function initInterval() {
        //инициализируем интервал
        interval = setInterval(() => {
          if (!autoplay.infinity) {
            //если до последнего слайда и затем стоп
            if (index === slides.length - 1) {
              //то сразу проверяем наше положение
              clearInterval(interval);
              flag = true; //отмечаем, что слайдер уже был прокручен до конца
            } else {
              //и если не последний слайд то ...
              initSlides();
            }
          } else {
            //если infinity === false то бесконечно крутим
            initSlides();
          }
        }, autoplay.speed);
      }

      ;
      initInterval();

      if (autoplay.sliderStopHover) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".carousel-inner").addEvent("mouseover", () => {
          clearInterval(interval);
        });
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".carousel-inner").addEvent("mouseout", () => {
          if (!flag) {
            //если слайдер еще не был прокручен до конца то ...
            initInterval();
          }
        });
      }
    }
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".carousel").slider({
  images: [["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"], ["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"], ["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"], ["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"]],
  autoplay: {
    value: false,
    infinity: true,
    speed: 3000,
    sliderStopHover: false
  },
  dots: true,
  //точки слайдера
  axis: "horizontal",
  //направление
  counter: true
});

/***/ }),

/***/ "./src/js/lib/components/tabs.js":
/*!***************************************!*\
  !*** ./src/js/lib/components/tabs.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleTabs = function () {
  const content = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".tab-content");

  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getSiblingAll().removeClass("tab-item--active");
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass("tab-item--active");
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(content[i]).getSiblingAll().removeClass("tab-content--active");
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(content[i]).addClass("tab-content--active");
    });
  }

  return this;
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-tabpanel] .tab-item").toggleTabs();

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
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animation */ "./src/js/lib/modules/animation.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs */ "./src/js/lib/components/tabs.js");
/* harmony import */ var _components_accordeon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordeon */ "./src/js/lib/components/accordeon.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/slider */ "./src/js/lib/components/slider.js");
/* harmony import */ var _components_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/progressbar */ "./src/js/lib/components/progressbar.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setEvent = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
}; //2


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.outEvent = function (eventName, callback) {
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
}; //1 set/get inner.HTML


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
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);

    for (let i = 0; i < this.length; i++) {
      if (!this[i]) {
        continue;
      } else {
        this[i].classList.add(...classNames);
      }
    }

    return this;
  }
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

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url, dataTypeAnswer = "json") {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, error: ${result.status}`);
  }

  switch (dataTypeAnswer) {
    case "json":
      return await result.json();

    case "text":
      return await result.text();
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, target, dataTypeAnswer = "text") {
  const result = await fetch(url, {
    method: "POST",
    body: target
  });

  switch (dataTypeAnswer) {
    case "json":
      return await result.json();

    case "text":
      return await result.text();
  }
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