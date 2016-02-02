$(document).ready( function() {
  $(".menu-open").click( function() {
    var visibility = $(".menu-circle").css("visibility");
    
    if(visibility == "hidden") {
      $(".menu-circle").animate({visibility: visible}, 200);
    } else {
      $(".menu-circle").animate({visibility: hidden}, 200);
    }
  });
});
