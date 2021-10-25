import $ from "../core";

$.prototype.openModal = function() {
    for(let i = 0; i < this.length; i++) {
        const target = this[i].dataset.target;
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(400);
            document.body.style.overflow = "hidden";
        });
    }
};

$.prototype.closeModal = function() {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click((e) => {
            if (e.target.classList.contains("modal") || e.target.dataset.close === "") {
                $(".modal").fadeOut(400);
                document.body.style.overflow = "";
            }
        });
    }
};


$("[data-toggle='modal']").openModal();
$("[data-close]").closeModal();
$(".modal").closeModal();