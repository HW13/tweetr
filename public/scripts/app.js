$(function () {

  //Prevents cross-site scripting
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  //Takes in a Tweet Object.
  //Returns <article> containing entire HTML structure of the tweet.
  function createTweetElement(object) {
    var $tweet =
           $(`<article class="tweet">
            <header>
              <img class="avatar" src="${escape(object.user.avatars.regular)}">
              ${escape(object.user.name)}
              <div class="handle">${escape(object.user.handle)}</div>
            </header>
            <p>${escape(object.content.text)}</p>
            <footer>
              ${escape(moment(object.created_at).fromNow())}
              <i class="flag-button fa fa-flag-o fa-lg" aria-hidden="true"></i>
              <i class="fa fa-retweet fa-lg" aria-hidden="true"></i>
              <i class="thumb-button fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
            </footer>
          </article>`);

    return $tweet;
  }

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  function renderTweets(tweets) {
    $('#tweets-container').empty();
    tweets.forEach(function (tweet) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    });
  }

  // GETs tweets then uses renderTweets to populate the HTML
  function loadTweets () {
    $.ajax({
      method: 'get',
      url: '/tweets'
    }).done(renderTweets);
  }

  loadTweets();

  // POSTs new tweet to database on form submission.
  // Then without refreshing, the page is updated.
  $('section.new-tweet form').on('submit', function (event) {
    event.preventDefault();
    var tweet = $(this).find('[name=text]').val();
    if (tweet === "") {
      alert("Tweets cannot be empty");
      return false;
    }
    if (tweet.length > 140) {
      alert("Character limit exceeded");
      return false;
    }
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).serialize()
    }).done(function () {
      loadTweets();
      $(".new-tweet textarea").val("");
      $(".new-tweet textarea").focus();
      $("section.new-tweet").slideToggle("slow");
    });
  });
});

