import $ from "../core";

$.prototype.toggleAccodreon = function () {
    const items = document.querySelectorAll(".accordeon-block");

    for (let i = 0; i < this.length; i++) {
        items[i].style.display = "none";//прячем все айтемы

        $(this[i]).click(() => {//при клике прверяем
            if (items[i].style.display !== "none") {//если айтем уже открыт
                $(items[i]).fadeOut(400);//скрываем
                $(this[i]).removeClass("accordeon-active");//убираем класс активности
            } else {//если закрыт
                for (let j = 0; j < this.length; j++) {
                    $(this[j]).removeClass("accordeon-active");//убираем класс акивности всех таргетов
                    items[j].style.display = "none";
                }
                
                $(this[i]).addClass("accordeon-active");//добавляем рабочему
                $(items[i]).fadeIn(400);
            }
        });
    }
    return this;
};

$(".accordeon-heading").toggleAccodreon();