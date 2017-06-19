// Toggles tweet-composer when "compose" button is pressed.

$(function () {
  $("#nav-bar button").click( function () {
    $("section.new-tweet").slideToggle("fast", "linear");
    $(".new-tweet textarea").focus();
  });
});
