// Hover state for .tweet in index

$(document).ready(function(){
  $(".tweet").hover(
    function() {
      $(this).addClass("hover");
    }, function() {
      $(this).removeClass("hover");
    }
  );
});