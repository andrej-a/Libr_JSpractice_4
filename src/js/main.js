import "./lib/lib";

$(".second").setEvent("click", logHello);

function logHello() {
    console.log("Hello");
}

$(".second").outEvent("click", logHello);

$(".second").click(logHello);