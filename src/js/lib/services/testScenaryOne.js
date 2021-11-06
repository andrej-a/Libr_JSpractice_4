"use strict";

const roles = ["Городничий", "Аммос Федорович",
    "Артемий Филиппович", "Лука Лукич"
];

const textLines =
`Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! Городничий! Еще и с секретным предписаньем!
Аммос Федорович: Да, обстоятельство такое... необыкновенно, просто необыкновенно. Что-нибудь недаром. 
Лука Лукич: Зачем же, Антон Антонович, отчего это? Зачем к нам ревизор? 
Городничий: Зачем! Так уж, видно, судьба! (Вздохнув.) До сих пор, благодарение Богу, подбирались к другим городам; теперь пришла очередь к нашему.
`;


roles.forEach(role =>{
    const wrap = document.createElement("div");
    wrap.style.display = "block";
    wrap.innerHTML = `<br>${role}:<br>`;

    textLines.split('\n').forEach((string, index) => {//перебираем строки по переносам строки
        if (string.indexOf(role) === 0) {//если строка содержит роль
            wrap.innerHTML += `${index + 1}) ${string.replace(`${role}:`, "")}<br>`;
        }
    }); 

    //document.querySelector("body").appendChild(wrap);
});