import $ from "../core";

$.prototype.setProgressBar = function (wrapperHeight, colorProgressBar) {
    const progressbar = document.querySelector(".progressbar");
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

    const step = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;

    window.addEventListener('scroll', () => {
        console.log(innerProgressBar.style.width);
        if (window.pageYOffset / step < 100) {
            innerProgressBar.style.width = `${window.pageYOffset / step}%`;
            console.log("biiigg");
        } else {
            innerProgressBar.style.width = innerProgressBar.style.width;
            console.log("less");
        }
    });
};

$().setProgressBar(50, "red");