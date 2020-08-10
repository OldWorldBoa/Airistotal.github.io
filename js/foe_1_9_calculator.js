$(document).ready( function() {
  $("#calucate_output").on("click", function() {
    let leftover_fps = $("#total_fps").val() - (
      ($("#first_place_fps").val() * 1.9) + 
      ($("#second_place_fps").val() * 1.9) + 
      ($("#third_place_fps").val() * 1.9) + 
      ($("#fourth_place_fps").val() * 1.9) + 
      ($("#fifth_place_fps").val() * 1.9)
    );

    $("#output").html(leftover_fps.toString());
  });
});