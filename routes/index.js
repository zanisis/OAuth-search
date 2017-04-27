var express = require('express');
var router = express.Router();
const OAuth = require('oauth');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.CONSUMER_KEY, //your application consumer key
        process.env.CONSUMER_SECRET, //your application secret
        '1.0A',
        null, //this is callback
        'HMAC-SHA1'
      );
      oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi',
      process.env.TOKEN, //test user token
      process.env.TOKEN_SECRET, //test user secret
      function (e, data){
        res.send(data)
      });
});

module.exports = router;
