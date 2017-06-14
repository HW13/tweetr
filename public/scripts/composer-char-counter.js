//Character counter for new-tweets.
// When maxChar exceeded text turns red

$(function () {
  var maxChar = 140;
  $(".new-tweet").on("keyup keydown", "textarea", function () {
    var currentChar = $(this).val().length;
    var remainingChar = maxChar - currentChar;
    $(".new-tweet .counter").text(remainingChar);
    if (remainingChar < 0) {
      $(".new-tweet .counter").addClass("over-max");
    } else {
    $(".new-tweet .counter").removeClass("over-max");
  }
  })
});