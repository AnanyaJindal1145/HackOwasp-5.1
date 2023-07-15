$(".kanban-block").mouseover(function(){
    $(this).addClass("kanban-block-hover");
});

$(".kanban-block").mouseout(function(){
    $(this).removeClass("kanban-block-hover");
});

$(".add-class-btn").click(function(){
    $("#"+this.id+"-tasks").html("<div class='post-it' id='1'><p id='note-content'><form method='post'><input type='text' name='class1' placeholder='enter class name'><button type='submit' class='done-button' name='submit'>Done</button></form> </p></div>");
});

