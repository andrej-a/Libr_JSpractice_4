import $ from "../core";

$.prototype.slider = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width;//ширина родителя
        const slides = this[i].querySelectorAll(".carousel-item");//количество слайдов
        const slidesField = this[i].querySelector(".carousel-slides");
        const dots = this[i].querySelectorAll(".carousel-indicators>li");
        slidesField.style.width = 100 * slides.length + "%";//ставим ширину обертки
        slides.forEach(item => {//все слайды в один размер
            item.style.width = width;
        });

        let offset = 0;
        let index = 0;
        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            if (offset === (+width.replace(/\D/g, "") * (slides.length - 1))) {
                offset = 0;
                index = 0;
            } else {
                offset += +width.replace(/\D/g, "");
                index++;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => {
                $(dot).getSiblingAll().removeClass("active");

                dots[index].classList.add("active");
            });
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset === 0) {
                offset = (+width.replace(/\D/g, "") * (slides.length - 1));
                index = slides.length - 1;
            } else {
                offset -= +width.replace(/\D/g, "");
                index--;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => {
                $(dot).getSiblingAll().removeClass("active");

                dots[index].classList.add("active");
            });
        });

        dots.forEach((dot,i) => {
            $(dot).click(() => {
                $(dot).getSiblingAll().removeClass("active");
                dots[i].classList.add("active");


                offset = i * +width.replace(/\D/g, "");
                index = i;
                slidesField.style.transform = `translateX(-${offset}px)`;
            });
        });
    }
};
$(".carousel").slider();