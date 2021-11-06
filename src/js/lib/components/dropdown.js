import $ from "../core";

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i].id === this[i].nextElementSibling.dataset.toggleId) {
            $(this[i].nextElementSibling).fadeToggle();
        }
    }
    return this;
};

$(".dropdown-toggle").click(function(e) {
    $(e.target).dropdown();
});