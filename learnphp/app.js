// $(document).ready(function(){
//     // alert("文档加载完毕");
//     $("button").mouseleave(function(){
//         $("#p1").text("id修改");
//         $(".class1").text("class修改");
//     });
// });

// $(document).ready(function(){
//     // alert("文档加载完毕");
//     $("#button1").on("click",clickHandler1);
//     $("#button1").on("click",clickHandler2);
//     $("#button1").off("click", clickHandler1);
// });
//
// function clickHandler1(e){
//     console.log("clickHandler1")
// }
//
// function clickHandler2(e){
//     $("#p1").text("id修改");
//     $(".class1").text("class修改");
// }
// $(document).ready(function () {
//     $("#button1").click(function(){
//         var e = jQuery.Event("MyEvent");
//         $("#button1").trigger(e);
//
//         $("#button1").bind("MyEvent",function (event) {
//             console.log(event);
//         })
//
//     })
// });

$(document).ready(function () {
    $("#button1").click(function(){
        // $("#p1").text("修改成指定内容");
        // $("#p1").html("<h1>标题</h1>");
        // $("#input1").val("修改后");
        // $(".class1").text(function (i,ot) {
        //     return "old: "+ot+" new: "+(123);
        // })
        $("#p1").hide(1000);

    });

    $("#button2").click(function(){
        $("#p1").show(1000);
    });
    $("#button3").click(function(){
        $("#p1").toggle(1000);
    });

    $("#in").click(function () {
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });

    $("#out").click(function () {
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });

    $("#toggle").click(function () {
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    });

    $("#flipshow").click(function () {
        $("#content").slideDown(1000);
    })

    $("#fliphide").click(function () {
        $("#content").slideUp(1000);
    })

    $("#button4").click(function () {
        $("#p2").hide(1000,function () {
            // alert("回调");/*回调函数*/
        });
        $("#p3").css("color","red").slideUp(1000).slideDown(1000);
    })

    $("#button5").click(function () {
        $("#result").text("请求数据中，请稍后。。。");
        $.post("Server.php",{name:$("#namevalue").val()},function (dat) {
            $("#result").text(dat);
        }).error(function () {
            $("#result").text("通讯有问题");
        });
    })//AJAX

    // $("body").text("wait..");
    // $("body").load("box.htm",function (a,status,c) {
    //     console.log(status);
    //     if(status=="error"){
    //         $("body").text("片段加载失败");
    //     }
    // })//片段加载

    // $.getScript("Hello.js").complete(function () {
    //     sayHello();
    // })
});





