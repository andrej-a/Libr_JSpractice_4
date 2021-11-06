import $ from "../core";

//1
$.prototype.addClass = function(...classNames) {
    if (classNames.length === 0) {
        return this;
    }
<<<<<<< HEAD

    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNames);
=======
    for (let i = 0; i < this.length; i++) {
        if (!this[i]) {
            continue;
        } else {
            this[i].classList.add(...classNames);
        }
>>>>>>> master
    }
    return this;
};

//2
$.prototype.removeClass = function(...classNames) {
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
};

//3
$.prototype.toggleClass = function(className) {
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