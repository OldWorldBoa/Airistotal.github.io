$(document).ready( function() {
  $("#content").load("about.html");
  
  $(".about").on("tap click", function() {
    $("#content").load("about.html");
  });
  
  $(".contract").on("tap click", function() {
    $("#content").load("contract.html");
  });
  
  $(".news").on("tap click", function() {
    $("#content").load("news.html");
  });
  
  $(".contact").on("tap click", function() {
    $("#content").load("contact.html");
  });
});
