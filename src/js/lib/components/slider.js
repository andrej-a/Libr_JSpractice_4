import $ from "../core";

$.prototype.slider = function ({
        autoplay = {
            value: false,
            infinity: true,
            speed: 3000
        },
        dots = true, //точки слайдера
        axis = "horizontal" //направление
    } = {}) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width; //ширина родителя
        const height = window.getComputedStyle(this[i].querySelector(".carousel-inner")).height;//высота родителя
        const slides = this[i].querySelectorAll(".carousel-item"); //количество слайдов
        const slidesField = this[i].querySelector(".carousel-slides");//div слайдеров
        
        
        let offset = 0;
        let index = 0;
        let interval = null;
        let dotsArray = [];
        let offsetValue = null;
        
        if (axis === "vertical") {//если направление вертикальное
            slidesField.style.display = "flex";
            slidesField.style.flexDirection = "column";
            slidesField.style.height = 100 * slides.length + "%";

            //смещаем слайды на значение высоты родителя
            offsetValue = (+height.replace(/\D/g, "") * (slides.length - 1));
        } else {//horizontal
            slidesField.style.width = 100 * slides.length + "%"; //ставим ширину обертки
            //смещаем слайды на значение ширины родителя
            offsetValue = (+width.replace(/\D/g, "") * (slides.length - 1));
        }

        slides.forEach(item => { //все слайды в один размер по ширине и высоте
            item.style.height = height;
            item.style.width = width;
        });

        if (dots) {//если точки включены -- создаем
            const dotsWrapper = this[i].querySelector(".carousel-indicators");
            for (let j = 0; j < slides.length; j++) {
                const dot = document.createElement("li");
                dotsWrapper.append(dot);
                dotsArray.push(dot);
                $(dotsArray[0]).addClass("active");
            }
        }
        
        const toggleSlides = function() {//переключаем слайды
            //если направление вертикальное, то вниз; иначе вправо
            slidesField.style.transform = (axis === "vertical" ? `translateY(-${offset}px)` : `translateX(-${offset}px)`);
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
                    offset = offsetValue;
                    index = slides.length - 1;
                } else {
                    offset -= (axis === "vertical" ? +height.replace(/\D/g, "") : +width.replace(/\D/g, ""));
                    index--;
                }

            } else {//листаем вперед
                if (offset === offsetValue) {
                    offset = 0;
                    index = 0;
                } else {
                    offset += (axis === "vertical" ? +height.replace(/\D/g, "") : +width.replace(/\D/g, ""));
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
            dotsArray.forEach((dot, i, ) => {
                $(dot).click(() => {
                    $(dot).getSiblingAll().removeClass("active");
                    dotsArray[i].classList.add("active");
                    offset = i * (axis === "vertical" ? +height.replace(/\D/g, "") : +width.replace(/\D/g, ""));
                    index = i;
                    slidesField.style.transform = (axis === "vertical" ? `translateY(-${offset}px)` : `translateX(-${offset}px)`);
                });
            });
        } catch(e){}

        if (autoplay.value) {//если автопрокрутка -- крутим
            interval = setInterval(() => {
                initSlides();

                if (!autoplay.infinity) {//до последнего слайда и затем стоп
                    if (index === slides.length - 1) {
                        clearInterval(interval);
                    }
                }
            }, autoplay.speed);
        }

    }
};

$(".carousel").slider({});