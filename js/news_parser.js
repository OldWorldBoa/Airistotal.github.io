var pageExecute = {

    fileContents:"Null",

    init: function () {
        $.ajax({
            url: "./seeds/Ag.txt",
            async: false,
            success: function (data) {
                pageExecute.fileContents = data;
            }
        });
    }
};