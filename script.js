$(document).ready( function() {
  $("#content").load("about.html");
  
  $("#about").click(function() {
    $("#content").load("about.html");
  });
  
  $("#contract").click(function() {
    $("#content").load("contract.html");
  });
  
  $("#news").click(function() {
    $("#content").load("news.html");
  });
  
  $("#contact").click(function() {
    $("#content").load("contact.html");
  });
});
