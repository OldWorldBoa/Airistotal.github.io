function set_height() {
	var header_height = parseInt($("#header").css("height"));
	var body_height = parseInt($("body").css("height"));
	var main_height = body_height - header_height;

	$("#main").css("height", main_height + "px");
}

function set_width() {
	var main_width = parseInt($("#main").css("width"));
	var scroll_width = 17;
	var content_width = main_width - scroll_width;

	$("#content").css("width", content_width);
}

function set_size() {
	set_height();
	set_width();
}

$(document).ready( function() {
	set_size();

	$(window).resize(set_size);
});