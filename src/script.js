$(".red").mouseover(function(){
    $(".red").addClass("red-hover");
    $(".blue").addClass("blue-when-red-hover");
})

$(".red").mouseout(function(){
    $(".red").removeClass("red-hover");
    $(".blue").removeClass("blue-when-red-hover");
})

$(".blue").mouseover(function(){
    $(".blue").addClass("all-hover");
})

$(".blue").mouseout(function(){
    $(".blue").removeClass("all-hover");
})
