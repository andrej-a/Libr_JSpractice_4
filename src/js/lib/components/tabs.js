import $ from "../core";

$.prototype.toggleTabs = function() {
    const content = $(".tab-content");
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).getSiblingAll().removeClass("tab-item--active");
            $(this[i]).addClass("tab-item--active");

            $(content[i]).getSiblingAll().removeClass("tab-content--active");
            $(content[i]).addClass("tab-content--active");
        });
    }
    return this;
};

$("[data-tabpanel] .tab-item").toggleTabs();