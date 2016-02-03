$(document).ready( function() {
  $("#content").load("about.html");
  
  $(".about").on("tap click", function(e) {
    $("#content").load("about.html");
    e.stopPropagation();
  });
  
  $(".contract").on("tap click", function(e) {
    $("#content").load("contract.html");
    e.stopPropagation();
  });
  
  $(".news").on("tap click", function(e) {
    $("#content").load("news.html");
    e.stopPropagation();
  });
  
  $(".contact").on("tap click", function(e) {
    $("#content").load("contact.html");
    e.stopPropagation();
  });
});
