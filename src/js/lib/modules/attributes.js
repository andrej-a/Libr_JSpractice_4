import $ from "../core";

//1
$.prototype.addAttribute = function(item, value) {
    if (!item || !value) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(item, value);
    }
    return this;
};

//2
$.prototype.removeAttribute = function(item) {
    if (!item) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(item);
    }
    return this;
};

//3

$.prototype.hasAttribute = function(item) {
    if (!item) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        return this[i].hasAttribute(item);
    }
};

//4
$.prototype.hasAttributeAll = function(item) {
    if (!item) {
        return this;
    }
    let obj = {};
    for (let i = 0; i < this.length; i++) {
        obj[`${this[i]} ${i}`] = this[i].hasAttribute(item);
    }
    return obj;
};