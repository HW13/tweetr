// Listens for clicks on

$(function(){
  $('#tweets-container').on('click', function(evt){
    var $target = $(evt.target);
    if($target.hasClass('flag-button')){
      $target.toggleClass('fa-flag-o').toggleClass('fa-flag');
    } else if($target.hasClass('thumb-button')) {
      $target.toggleClass('fa-thumbs-up').toggleClass('fa-thumbs-o-up');
    }
  });
});