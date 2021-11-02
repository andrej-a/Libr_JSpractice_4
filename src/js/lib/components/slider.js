import $ from "../core";

$.prototype.slider = function ({
        images = [],
        autoplay = {
            value: false,
            infinity: true,
            speed: 3000
        },
        dots = true, //точки слайдера
        axis = "horizontal", //направление
        counter = false,
    } = {}) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width; //ширина родителя
        const height = window.getComputedStyle(this[i].querySelector(".carousel-inner")).height;//высота родителя
        const slidesField = this[i].querySelector(".carousel-slides");//div слайдеров
        let counterField = null;
        
        let offset = 0;
        let index = 0;
        let interval = null;
        let dotsArray = [];
        let offsetValue = null;

        //динамическое создание картинок
        for (let i = 0; i < images.length; i++) {
            slidesField.innerHTML += `
                <div class="carousel-item">
                    <img src=${images[i][0]} alt=${images[i][1]}>
                </div>
            `;
        }

        const slides = this[i].querySelectorAll(".carousel-item"); //количество слайдов
        
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

        const initCounter = () => { //счетчик слайдеров типа 1/4
            if (counter) {
                if (!counterField) {//если не создано то создаем
                    counterField = document.createElement("div"); //div счетчика
                    $(counterField).addClass("carousel-counter");
                    this[i].append(counterField);
                    counterField.style.display = "flex";
                    counterField.innerHTML = `<p>${index + 1} / ${slides.length}</p>`;
                } else {//если создано просто меняем
                    counterField.innerHTML = `<p>${index + 1} / ${slides.length}</p>`;
                }
            }
        };

        initCounter();
        
        const toggleSlides = function() {//переключаем слайды
            //если направление вертикальное, то вниз; иначе вправо
            slidesField.style.transform = (axis === "vertical" ? `translateY(-${offset}px)` : `translateX(-${offset}px)`);
                try {
                    dotsArray.forEach(dot => {
                        $(dot).getSiblingAll().removeClass("active");
                        dotsArray[index].classList.add("active");
                    });
                }catch(e){}
                initCounter();
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

        if (dots) {//если точки включены -- создаем
            const dotsWrapper = this[i].querySelector(".carousel-indicators");
            for (let j = 0; j < slides.length; j++) {
                const dot = document.createElement("li");
                dotsWrapper.append(dot);
                dotsArray.push(dot);
            }
            $(dotsArray[0]).addClass("active");

            dotsArray.forEach((dot, i, ) => {
                $(dot).click(() => {
                    $(dot).getSiblingAll().removeClass("active");
                    dotsArray[i].classList.add("active");
                    offset = i * (axis === "vertical" ? +height.replace(/\D/g, "") : +width.replace(/\D/g, ""));
                    index = i;
                    slidesField.style.transform = (axis === "vertical" ? `translateY(-${offset}px)` : `translateX(-${offset}px)`);
                    initCounter();
                });
            });
        }

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

$(".carousel").slider({
    images: [
        ["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"],
        ["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"],
        ["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"],
        ["https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg", "photo"],
    ],
    autoplay: {
        value: false,
        infinity: true,
        speed: 3000
    },
    dots: true, //точки слайдера
    axis: "horizontal", //направление
    counter: true,
});