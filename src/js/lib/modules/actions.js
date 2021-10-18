import $ from "../core";

//1
$.prototype.setEvent = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for(let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

//2
$.prototype.outEvent = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for(let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};

//3
$.prototype.click = function(callback) {    
    for(let i = 0; i < this.length; i++) {
        if (!callback) {
            return this[i].click();
        } else {
            this[i].addEventListener("click", callback);
        }
    }
    return this;
};