$(document).ready( function() {
  $(".menu-open").click( function() {
    var visibility = $(".menu-circle").css("visibility");
    
    if(visibility == "hidden") {
      $(".menu-circle").css("visibility", "visible");
    } else {
      $(".menu-circle").css("visibility", "hidden");
    }
  });
});
