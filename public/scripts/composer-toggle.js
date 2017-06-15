// Toggles tweet-composer when "compose" button is pressed.

$("#nav-bar button").click( function () {
  $("section.new-tweet").slideToggle("fast");
  $(".new-tweet textarea").focus();
});
