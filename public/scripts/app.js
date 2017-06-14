$(function () {

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  },
  {
    "user": {
      "name": "Bob",
      "avatars": {
        "regular": "/images/sheep-avatar.png"
      },
      "handle": "@sheep1"
    },
    "content": {
      "text": "I like being a sheep!"
    },
    "created_at": 1461113796368
  }

];

//Takes in a Tweet Object.
//Returns <article> containing entire HTML structure of the tweet.
function createTweetElement(object) {
  var tweet =
         `<article class="tweet">
          <header>
            <img class="avatar" src="${object.user.avatars.regular}">
            ${object.user.name}
            <div class="handle">${object.user.handle}</div>
          </header>
          <p>${object.content.text}</p>
          <footer>
            ${object.created_at}
            <i class="fa fa-flag-o" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </footer>
        </article>`;

  return tweet;
}

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
function renderTweets(tweets) {
  tweets.forEach(function (element){
    $('#tweets-container').append(createTweetElement(element));
  })
}

renderTweets(data)
})

