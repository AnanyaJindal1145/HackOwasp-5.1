$(".kanban-block").mouseover(function(){
    $(this).addClass("kanban-block-hover");
});

$(".kanban-block").mouseout(function(){
    $(this).removeClass("kanban-block-hover");
});

$(".add-class-btn").click(function(){
    $("#"+this.id+"-tasks").html("<div class='post-it' id='1'><p id='note-content'>This is note content </p></div>");
});

