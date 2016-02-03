function center_content() {
  var width = parseInt($("body").css("width"));
  var bar_width = parseInt($(".side-bar").css("width"));
  var content_width = parseInt($("#content").css("width"));
  var margin = (width - bar_width - content_width) / 2;
  
  if(margin >= 0) {
    $("#content").css("margin-left", margin + "px");
  }
}

function size_body() {
  var head_height = $("#head").outerHeight(true);
  var body_height = $("body").outerHeight(true);
  var target_height = body_height - head_height;
  
  $("#body").css("height", target_height + "px");
}

$(document).ready( function() {
  center_content();
  size_body();
  
  $(window).resize( function() {
    center_content(); 
    size_body();
  });
});
