$(document).ready(function() {
	$('body').bind("keydown", function(e) {
		console.log(e.which);
		
		switch(e.which) {
			case 37:
				// Left arrow
				left = true;
				break;
			case 38:
				// Up arrow
				up = true;
				break;
			case 39:
				// Right arrow
				right = true;
				break;
			case 40:
				// Down arrow
				down = true;
				break;
		}
	});

	$('body').bind("keyup", function(e) {
		console.log(e.which);

		switch(e.which) {
			case 37:
				// Left arrow
				left = false;
				break;
			case 38:
				// Up arrow
				up = false;
				break;
			case 39:
				// Right arrow
				right = false;
				break;
			case 40:
				// Down arrow
				down = false;
				break;
		}
	});
});
