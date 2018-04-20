$(document).ready(function () {
    $(".menu1").hover(function () {
        $(this).children("ul").slideToggle(200);
        changeIcon($(this).children("a"));
    },function () {
        $(this).children("ul").slideToggle(200);
        changeIcon($(this).children("a"));
    })
});

function changeIcon(node) {
    if(node){
        if(node.css("background-image").indexOf("向右箭头.png")>=0){
            node.css("background-image","url('image/向下箭头.png')");
        }else {
            node.css("background-image","url('image/向右箭头.png')");
        }
    }
}
