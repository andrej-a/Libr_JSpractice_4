import $ from "../core";

$.prototype.toggleAccodreon = function ({elements = []} = {}) {
    

    elements.forEach(value => {//динамически создаем элементы аккордеона
        this[0].innerHTML += 
            `<p class="accordeon-heading">${value[0]}</p>
            <div class="accordeon-block">${value[1]}</div>`
        ;
    });

    const item = document.querySelectorAll(".accordeon-block");
    const trigger = document.querySelectorAll(".accordeon-heading");
    
    for (let i = 0; i < item.length; i++) {
        item[i].style.display = "none";//прячем все айтемы

        trigger[i].addEventListener("click", () => {
            item[i].style.display = "block";
            item[i].style.height = "60px";
        });
    }
    
};

$(".accordeon").toggleAccodreon({
    elements: [
        ["Вопрос первый", "Ответ на первый вопрос"],
        ["Вопрос второй", "Ответ на второй вопрос"],
        ["Вопрос третий", "Ответ на третий вопрос"],
    ]
});