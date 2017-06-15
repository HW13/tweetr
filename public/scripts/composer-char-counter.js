//Character counter for new-tweets.
// When maxChar exceeded text turns red.

$(function () {
  var maxChar = 140;
  $(".new-tweet").on("input", "textarea", function () { //need to find better "input"
    var currentChar = $(this).val().length;
    var remainingChar = maxChar - currentChar;
    var $location = $(".new-tweet .counter");
    $location.text(remainingChar);
    if (remainingChar < 0) {
      $location.addClass("over-max");
    } else {
      $location.removeClass("over-max");
    }
  });
});