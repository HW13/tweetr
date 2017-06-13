//Character counter for new-tweets.

$(document).ready(function(){
  var maxChar = 140;
  $("textarea").keyup(function () {
    var currentChar = $(this).val().length;
    var remainingChar = maxChar - currentChar;
    $(".counter").text(remainingChar);
  })
});