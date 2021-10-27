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

$.prototype.closeModal = function(target) {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click((e) => {
            console.log(e.target);
            if (e.target.dataset.close === "") {
                if (e.target.classList.contains("dynamic")) {
                    $(target).fadeOut(400);
                    document.body.style.overflow = "";
                    document.body.removeChild(document.querySelector(target));
                } else {
                    $(target).fadeOut(400);
                    document.body.style.overflow = "";
                }
            }
        });
    }
};


$("[data-toggle='modal']").openModal();
$("[data-close]").closeModal(".modal");



//btns = {count: num, settings: [[text, classNames=[], close, callback]]}
 $.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement("div");
        modal.setAttribute("id", this[i].dataset.target.slice(1));
        modal.classList.add("modal", "dynamic");
        modal.setAttribute("data-close", "");
        modal.innerHTML = `
                <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close">
                        <span class="dynamic" data-close>&times;</span>
                    </button>

                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                            ${text.title}
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        `;//innerHTML

        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement("button");
            let [text, classes, close, cb] = btns.settings[j];
            btn.innerText = text;
            btn.classList.add("btn", ...classes);
            
            if (close === true) {
                btn.setAttribute("data-close", "");
            }

            if (cb && typeof(cb === "function")) {
                btn.addEventListener("click", cb);
            }

            buttons.push(btn);
        }

        document.body.append(modal);
        modal.querySelector(".modal-footer").append(...buttons);
        $(modal).fadeIn(400);
        modal.querySelectorAll("[data-close]").forEach(btn => {
            $(btn).closeModal(`#${modal.id}`);
        });
    }

}//createModal

$("#testTrigger").click(function(e) {
    $("#testTrigger").createModal({
        text: {
            title: "Test Modal Title #2",
            body: "Test Modal Body #2"
        },
        btns: {
            count: 2,
            settings: [
                ["Close #2", ["btn-danger", "dynamic"], true],
                ["Safe changes #2", ["btn-success"], false, ],
            ]
        }
    });
});
