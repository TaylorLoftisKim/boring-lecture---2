$(document).ready(function() {

  $("#focus1").click(function() {
    $("#focus2").removeClass();
    $("#focus1").toggleClass("highlight");
  });

  $("#focus2").click(function() {
    $("#focus1").removeClass();
    $("#focus2").toggleClass("highlight");
  });
});
