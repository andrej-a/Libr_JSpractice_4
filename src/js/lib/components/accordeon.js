import $ from "../core";

$.prototype.toggleAccodreon = function ({elements = []} = {}) {
    

    elements.forEach(value => {//динамически создаем элементы аккордеона
        this[0].innerHTML += 
            `   <p class="accordeon-heading">${value[0]}</p>
                <div class="accordeon-block">
                    <div class="accordeon-inner">
                        ${value[1]}
                    </div>
                </div>`
        ;
    });

    const items = document.querySelectorAll(".accordeon-block");
    const trigger = document.querySelectorAll(".accordeon-heading");
    
    for (let i = 0; i < items.length; i++) {

        trigger[i].addEventListener("click", () => {
            
            if (!items[i].classList.contains("accordeon-block-active")) {

                items.forEach((item, index) => {
                    $(item).removeClass("accordeon-block-active");
                    $(trigger[index]).removeClass("accordeon-active");
                });

                $(trigger[i]).addClass("accordeon-active");
                $(items[i]).addClass("accordeon-block-active");
                
            } else {
                $(trigger[i]).removeClass("accordeon-active");
                $(items[i]).removeClass("accordeon-block-active");
            }
        });
    }

    };

$(".accordeon").toggleAccodreon({
    elements: [
        ["Вопрос первый", "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."],

        ["Вопрос второй", "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."],

        ["Вопрос третий", "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."],
    ]
});