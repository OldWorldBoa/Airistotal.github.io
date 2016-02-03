$(document).ready( function() {
  $("#content").load("about.html");
  
  $(".about").on("tap", function() {
    $("#content").load("about.html");
  });
  
  $(".contract").on("tap", function() {
    $("#content").load("contract.html");
  });
  
  $(".news").on("tap", function() {
    $("#content").load("news.html");
  });
  
  $(".contact").on("tap", function() {
    $("#content").load("contact.html");
  });
});
