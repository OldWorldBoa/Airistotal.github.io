$(document).ready( function() {
  $(".menu-open").click( function() {
    var visibility = $(".menu-circle").css("visibility");
    
    if(visibility == "hidden") {
      $(".menu-circle").animate({opacity: 1.0}, 200);
    } else {
      $(".menu-circle").animate({opacity: 0.0}, 200);
    }
  });
});
