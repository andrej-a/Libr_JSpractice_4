import $ from "../core";

$.prototype.animateOverTime = function(duration, callback, fin) {
    let timeStart;

    //запускается каждый раз и получает аргумент time из браузера
    //в первый запуск записываем time в timeStart как стартовое время
    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }
        //от времени из браузера time (меняется каждую итерацию) каждый раз отнимаем время начала анимации
        let timeElapsed = time - timeStart;
        //вычисляется изменение opacity и меняется. как только станет >, то 1 opacity = 1
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
};


//1
//вариант из урока
$.prototype.fadeIn = function(duration, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || "block";//еще один способ задать параметры по-умолчанию

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeIn, fin);
        requestAnimationFrame(ani);
    }
    return this;
};
//рабочий вариант с Web Animations API
$.prototype.fadeInAPI = function() {
    function _fadeInAPI(elem, duration = 800, iterate = 1) {
        const opacity = [
            {opacity: "0", offset: 0},
            {opacity: "1", offset: 1},
        ];
        const timing = {
            duration: duration,
            iterations: iterate
          };

        return elem.animate(opacity, timing);
    }

    for(let i = 0; i < this.length; i++) {
        const element = this[i];
        _fadeInAPI(element, 800, 1);
    }
    return this;
};

//2
//варинат из урока
$.prototype.fadeOut = function (duration, fin) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = "none";
            }
        };

        const ani = this.animateOverTime(duration, _fadeOut, fin);
        requestAnimationFrame(ani);
    }
    return this;
};

//рабочий вариант с Web Animations API
$.prototype.fadeOutAPI = function(duration = 800) {
    function _fadeOutAPI(elem, duration = 800, iterate = 1) {
        const opacity = [
            {opacity: "1", offset: 0},
            {opacity: "0", offset: 1}
        ];
        const timing = {
            duration: duration,
            iterations: iterate
          };

        return elem.animate(opacity, timing);
    }

    for(let i = 0; i < this.length; i++) {
        const elem = this[i];
        _fadeOutAPI(elem, 800, 1);
        setTimeout(() => {
            elem.style.display = "none";
        }, duration);
    }
    return this;
};
