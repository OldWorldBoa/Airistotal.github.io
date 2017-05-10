function center_content() {
  var width = parseInt($("body").css("width"));
  var bar_width = parseInt($(".desktop-menu").css("width"));
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

function size_menu() {
  var menu_height = $(".desktop-menu").outerHeight(true);
  var name_height = $("#main-logo").outerHeight(true);
  var target_height = menu_height - name_height;

  var num_buttons = $(".side-button").length;
  var button_height = target_height / num_buttons;

  console.log(menu_height, name_height, target_height, num_buttons, button_height);

  $(".side-button").css("height", button_height - 10 + "px");
  $(".side-button").css("line-height", button_height - 10 + "px");
}

$(window).load( function(e) {
  center_content();
  size_body();
  size_menu()
  
  $(window).resize( function() {
    center_content(); 
    size_body();
    size_menu();
  });
});
