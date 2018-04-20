$.myjq = function () {
    alert("Hello MyjQuery");
}

$.fn.myjq = function () {
    $(this).text("Hello");
}