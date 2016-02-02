$(document).ready( function() {
  $("#content").load("about.html");
  
  $("#about").click(function() {
    $("#content").load("about.html");
  });
});
