//файл для работы со свойством display

import $ from "../core";

//1
$.prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        this[i].style.display = "";
    }
    return this;
};

//2
$.prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        this[i].style.display = "none";
    }
    return this;
};

//3
$.prototype.toggle = function () {
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