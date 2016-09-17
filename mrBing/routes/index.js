var express = require('express');
var router = express.Router();
var request = require('request');
var MS_AccountKey = "";
var bing_API_url =  "https://api.datamarket.azure.com/Bing/SearchWeb";

var auth = {
  user: MS_AccountKey,
  pass: MS_AccountKey
};

var qs = {
  "$format" : "json",
  Query: "'" + "Mustang" + "'"
};//Change Mustang to query later

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(bing_API_url, {
    'auth': auth,
    'qs': qs
  }, function(error, response, body){
    console.log("~!~!@~!@~! Bing bing bing ~!@~!@~!@~!@");
    res.json(body);
  });
});

module.exports = router;
