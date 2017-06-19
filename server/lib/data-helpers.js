"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, callback);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    },

    // Changes flag value in db
    flagTweet: function (newFlag, callback) {
     db.collection("tweets").updateOne(
      {"user.name": newFlag.user},
      {$set: {"content.flag": newFlag.content.flag}}, callback);
    },
    // Changes like value in db
    likeTweet: function (newLike, callback) {
     db.collection("tweets").updateOne(
      {"user.name": newLike.user},
      {$set: {"content.like": newLike.content.like}}, callback);
    }
  };
};
