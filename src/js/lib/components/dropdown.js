import $ from "../core";

$.prototype.dropdown = function(e) {
    for (let i = 0; i < this.length; i++) {
        if ($(e.target).dataset.toggleId === $(e.target).previousElementSibling.id) {
            $(this[i]).fadeToggle();
        }
    }
    //return this;
};