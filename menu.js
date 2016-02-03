function toggle_menu() {
  var opacity = parseInt($(".menu-circle").css("opacity"));
  
  if(opacity == 0) {
    $(".menu-circle").animate({opacity: 1.0}, 200);
  } else {
    $(".menu-circle").animate({opacity: 0.0}, 200);
  }
}

$(document).ready( function() {
  $(".menu-open").on("tap click", function(e) {
    toggle_menu();
  });
  
  $(".menu-open, .menu-circle, .phone-menu").on("mouseover", function(e) {
    e.stopPropagation();
  });
  
  $(":not(.menu-open, .menu-circle, .phone-menu)").on("mouseover", function(e) {
    console.log(e.target.class);
    $(".menu-circle").animate({opacity: 0.0}, 200);
  });
});
