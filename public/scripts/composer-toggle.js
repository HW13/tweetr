// Toggles tweet-composer when "compose" button is pressed.

$("#nav-bar button").click( function () {
  $("section.new-tweet").slideToggle("fast", "linear");
  $(".new-tweet textarea").focus();
});
