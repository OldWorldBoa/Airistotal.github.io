$(document).ready( function() {
  $(".menu-open").click( function() {
    var opacity = parseInt($(".menu-circle").css("opacity"));
    
    if(opacity == 0) {
      $(".menu-circle").animate({opacity: 1.0}, 200);
    } else {
      $(".menu-circle").animate({opacity: 0.0}, 200);
    }
  });
});
