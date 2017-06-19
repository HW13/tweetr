// Listens for clicks on

$(function(){
  $('#tweets-container').on('click', function(event){
    event.preventDefault();
    const $target = $(event.target);
    if($target.hasClass('flag-button')){
      $target.toggleClass('fa-flag-o').toggleClass('fa-flag');
      $target.data("tweetFlag", $target.hasClass("fa-flag"));

      $.ajax({
        method: 'post',
        url: `/tweets/${$target.data("tweetId")}/flag`,
        data: $target.data()
      }).done( function () {
        $target.closest(".tweet").find("p").slideToggle();
      })

    } else if($target.hasClass('thumb-button')) {
      $target.toggleClass('fa-thumbs-up').toggleClass('fa-thumbs-o-up');
      $target.data("tweetLike", $target.hasClass("fa-thumbs-up"));

      $.ajax({
        method: 'post',
        url: `/tweets/${$target.data("tweetId")}/like`,
        data: $target.data()
      });
    }
  });
});