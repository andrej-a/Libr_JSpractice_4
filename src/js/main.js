import "./lib/lib";

let elem = $(".second").find(0);
console.log(elem);
elem.click(function() {
    console.log($(this).html());
});

$("div").click(function() {
    console.log($(this).index());
});