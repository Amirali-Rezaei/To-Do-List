$("#ToDoInput").on("keyup", function (e) {
    if (e.keyCode == 13 && $("#ToDoInput").val() != "") {
        var task = $("<div class='task'></div>").text($("#ToDoInput").val());
        task.fadeOut(function () {
            $(".notcompleted").append(task);
            task.fadeIn();
        });
        var del = $('<i class="far fa-trash-alt"></i>').click(function () {
            var parent = $(this).parent();
            parent.fadeOut(function () {
                parent.remove();
            });
        });
        var done = $('<i class="fas fa-check"></i>').click(function () {
            var parent = $(this).parent();
            parent.fadeOut(function () {
                $(".completed").append(parent);
                parent.fadeIn();
            });
            $(this).remove();
        });
        var backToUnDone = $('<i class="fas fa-check-square"></i>').click(function () {
            var parent = $(this).parent();
            parent.fadeOut(function () {
                $(".notcompleted").append(parent);
                parent.fadeIn();
            });
            $(this).remove();
        });

        if ($('.task').parent().className == ".completed"){
            task.append(del, done);
        }
        else{
            task.append(del, done, backToUnDone);
        }

        $("#ToDoInput").val("");
    }
});
