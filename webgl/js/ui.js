$(document).ready(function () {
    $("#button").mousedown(function (e) {
        e.stopPropagation();

        switch (e.which) {
            case 1:
                // left mouse click
                break;
            case 2:
                // middle mouse click
                break;
            case 3:
                // right mouse click
                break;
            default:
                break;
        }
    });
});