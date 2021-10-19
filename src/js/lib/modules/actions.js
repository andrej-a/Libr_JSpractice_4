import $ from "../core";

//1
$.prototype.html = function(item) {
    for (let i = 0; i < this.length; i++) {
        if (item) {
            this[i].innerHTML = item;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

//2

$.prototype.find = function(num) {
    const swap = this[num];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

//3

$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];
    
    const findMyIndex = (item) => {
        return item === this[0];
    };

    return childs.findIndex(findMyIndex);

};