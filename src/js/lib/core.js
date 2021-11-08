
const $ = function(selector){
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; //{}
    }

    if (selector.tagName) { //если передаем тэг 
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;//в прототип возвращаемого this записываем прототип главной функции
window.$ = $;

export default $;