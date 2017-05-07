function toggle_menu() {
  var opacity = parseInt($(".menu-circle").css("opacity"));
  $pm = $(".phone-menu .simple-link");
  
  if(opacity == 0) {
    $pm.css("pointer-events", "auto");
    $pm.css("cursor", "auto");
    $(".menu-circle").animate({opacity: 1.0}, 200);
  } else {
    $pm.css("pointer-events", "none");
    $pm.css("cursor", "default");
    $(".menu-circle").animate({opacity: 0.0}, 200);
  }
}

$(document).ready( function() {
  $(".menu-open").on("tap click", function(e) {
    toggle_menu();
  });
  
  $(".simple-link, .menu-circle, .phone-menu").on("mouseover", function(e) {
    e.stopPropagation();
  });
  
  $(":not(.simple-link, .menu-circle, .phone-menu)").on("mouseover", function(e) {
    var opacity = parseInt($(".menu-circle").css("opacity"));
  
    if(opacity == 1) {
      toggle_menu();
    }
  });

  $(".about").on("tap click", function(e) {
    window.history.pushState({type: "about"}, "about", "?type=about");
  });

  $(".consult").on("tap click", function(e) {
    window.history.pushState({type: "consult"}, "consult", "?type=consult");
  });

  $(".news").on("tap click", function(e) {
    window.history.pushState({type: "news"}, "news", "?type=news");
  });

  $(".contact").on("tap click", function(e) {
    window.history.pushState({type: "contact"}, "contact", "?type=contact");
  });
});
