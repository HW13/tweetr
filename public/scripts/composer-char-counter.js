//Character counter for new-tweets.

$(document).ready(function(){
  var maxChar = 140;
  $(".new-tweet").on("keyup", "textarea", function () {
    var currentChar = $(this).val().length;
    var remainingChar = maxChar - currentChar;
    $(".new-tweet .counter").text(remainingChar);
    if (remainingChar < 0) {
      $(".new-tweet .counter").css("color", "red");
    } else {
    $(".new-tweet .counter").css("color", "black");
  }
  })
});