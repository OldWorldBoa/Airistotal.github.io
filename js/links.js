$(document).ready( function() {
  $("#content").load("about.html", size_body);
  
  $(".about").on("tap click", function() {
    $("#content").load("about.html", size_body);
  });
  
  $(".contract").on("tap click", function() {
    $("#content").load("contract.html", size_body);
  });
  
  $(".news").on("tap click", function() {
    $("#content").load("news.html", size_body);
  });
  
  $(".contact").on("tap click", function() {
    $("#content").load("contact.html", size_body);
  });

  $(".webgl").on("tap click", function() {
    window.location.href = "http://Airistotal.github.io/webgl/";
  });
});
