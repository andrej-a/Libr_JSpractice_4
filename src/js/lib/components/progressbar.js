import $ from "../core";

$.prototype.setProgressBar = function (wrapperHeight, colorProgressBar) {
    for (let i = 0; i < this.length; i++) {
        const progressbar = document.createElement("div");
        $(progressbar).addClass("progressbar");
        progressbar.style.width = "inherit";
        progressbar.style.maxWidth = "inherit";

        const wrapper = document.createElement("div");
        wrapper.style.cssText = `
            width: inherit;
            max-width: inherit;
            height: ${wrapperHeight}px;
            position: fixed;
            opacity: .7;
            z-index: 15;
        `;
        const innerProgressBar = document.createElement("div");
        innerProgressBar.style.cssText = `
            width: 0%;
            height: 100%;
            background-color: ${colorProgressBar};
        `;
        wrapper.appendChild(innerProgressBar);
        progressbar.appendChild(wrapper);
        this[i].insertBefore(progressbar, this[i].firstElementChild);


        const step = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset / step < 100) {
                innerProgressBar.style.width = `${window.pageYOffset / step}%`;
            } else {
                innerProgressBar.style.width = innerProgressBar.style.width;
            }
        });
    }
};

$(".container").setProgressBar(5, "red");