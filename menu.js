function toggle_menu() {
  var opacity = parseInt($(".menu-circle").css("opacity"));
  
  if(opacity == 0) {
    $(".menu-circle").animate({opacity: 1.0}, 200);
  } else {
    $(".menu-circle").animate({opacity: 0.0}, 200);
  }
}

$(document).ready( function() {
  $(".menu-open").on("tap click", function() {
    toggle_menu();
  });
  
  $("':not(.menu-open):not(.menu-circle):not(.phone-menu)'").on("tap click", function() {
    $(".menu-circle").animate({opacity: 0.0}, 200);
  });
});
