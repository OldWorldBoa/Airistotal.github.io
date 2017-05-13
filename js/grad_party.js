$(document).ready(function() {
	$svg_r = $("#right-border");
	$svg_l = $("#left-border");
	$content = $("#content");

	if( $svg_r.height() < $content.height()) {
		$svg_r.css("height", $content.height());
		$svg_l.css("height", $content.height());
	} else {
		$svg_r.css("height", "100%");
		$svg_l.css("height", "100%");
	}

	$(window).resize(function() {
		if( $svg_r.height() < $content.height()) {
			$svg_r.css("height", $content.height());
			$svg_l.css("height", $content.height());
		} else {
			$svg_r.css("height", "100%");
			$svg_l.css("height", "100%");
		}
	});
});