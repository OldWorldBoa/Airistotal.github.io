$(document).ready( function() {
  $(".foe-1-9-calculator").on("tap click", function(e) {
    window.history.pushState({type: "foe_1_9_calculator"}, "foe_1_9_calculator", "?type=foe_1_9_calculator");
  });
});