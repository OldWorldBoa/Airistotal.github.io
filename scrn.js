function center_content() {
  var width = $("body").css("width");
  var bar_width = $("#side-bar").css("width");
  var content_width = $("#content").css("width");
  var margin = (width - bar_width - content_width) / 2;
  
  if(margin >= 0) {
    $("#content").css("margin-left", margin);
  }
}

$(document).ready( function() {
  center_content();
  
  $(window).resize( center_content );
});
