require('dotenv').config();
const OAuth = require('oauth');


let keys = {}

// key.CONSUMER_KEY=process.env.CONSUMER_KEY
// key.CONSUMER_SECRET=process.env.CONSUMER_SECRET
// key.TOKEN=process.env.TOKEN
// key.TOKEN_SECRET=process.env.TOKEN_SECRET
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY, //your application consumer key
      process.env.CONSUMER_SECRET, //your application secret
      '1.0A',
      null, //this is callback
      'HMAC-SHA1'
    );

keys.search = (callback)=>{
  oauth.get(
  'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Zanimask',
  process.env.TOKEN, //test user token
  process.env.TOKEN_SECRET, //test user secret
  function (e, data){
    callback(data)
  });
}

keys.trends = (callback)=>{
  oauth.get(
  'https://api.twitter.com/1.1/trends/user_timeline.json?screen_name=Zanimask',
  process.env.TOKEN, //test user token
  process.env.TOKEN_SECRET, //test user secret
  function (e, data){
    callback(data)
  });
}

module.exports = keys;
