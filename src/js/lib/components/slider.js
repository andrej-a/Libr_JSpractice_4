import $ from "../core";

$.prototype.slider = function ({
    autoplay = false,
    infinity = false,
    dots = true,
} = {}) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width; //ширина родителя
        const slides = this[i].querySelectorAll(".carousel-item"); //количество слайдов
        const slidesField = this[i].querySelector(".carousel-slides");
        slidesField.style.width = 100 * slides.length + "%"; //ставим ширину обертки
        slides.forEach(item => { //все слайды в один размер
            item.style.width = width;
        });

        let offset = 0;
        let index = 0;
        let interval = null;
        let dotsArray = [];

        if (dots) {
            const dotsWrapper = this[i].querySelector(".carousel-indicators");
            
            for (let j = 0; j < slides.length; j++) {
                const dot = document.createElement("li");
                dotsWrapper.append(dot);
                dotsArray.push(dot);
                $(dotsArray[0]).addClass("active");
            }

            
        }
        
        const toggleSlides = function() {
            slidesField.style.transform = `translateX(-${offset}px)`;
                try {
                    dotsArray.forEach(dot => {
                        $(dot).getSiblingAll().removeClass("active");
                        dotsArray[index].classList.add("active");
                    });
                }catch(e){}
        };

        const initSlides = function (toNext = true) {
            if (!toNext) {//листаем назад
                if (offset === 0) {
                    offset = (+width.replace(/\D/g, "") * (slides.length - 1));
                    index = slides.length - 1;
                } else {
                    offset -= +width.replace(/\D/g, "");
                    index--;
                }

            } else {//листаем вперед
                if (offset === (+width.replace(/\D/g, "") * (slides.length - 1))) {
                    offset = 0;
                    index = 0;
                } else {
                    offset += +width.replace(/\D/g, "");
                    index++;
                }
            }
            toggleSlides();
        };

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            initSlides();
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            initSlides(false);
        });

        try {
            dotsArray.forEach((dot, i) => {
                $(dot).click(() => {
                    $(dot).getSiblingAll().removeClass("active");
                    dotsArray[i].classList.add("active");
                    offset = i * +width.replace(/\D/g, "");
                    index = i;
                    slidesField.style.transform = `translateX(-${offset}px)`;
                });
            });
        } catch(e){}

        if (autoplay) {//если автопрокрутка -- крутим
            interval = setInterval(() => {
                initSlides();

                if (!infinity) {//до последнего слайда и затем стоп
                    if (index === slides.length - 1) {
                        clearInterval(interval);
                    }
                }
            }, 3000);
        }

    }
};

$(".carousel").slider();