var request = require('request');
var MS_AccountKey = "";
var bing_API_url =  "https://api.datamarket.azure.com/Bing/Search/";
var Bing = require('node-bing-api')({ accKey: MS_AccountKey });

var auth = {
  user: MS_AccountKey,
  pass: MS_AccountKey
};

var qs = {
  "$format" : "json",
  Query: "'" + "Mustang" + "'"
};//Change Mustang to query later

function REST_ROUTER(router) {
  var self = this;
  self.handleRoutes(router);
}

REST_ROUTER.prototype.handleRoutes= function(router) {
  router.get("/",function(req,res){
    res.json({"Message" : "Hello World !"});
  });

  router.get("/RegSearch/:searchWord",function(req,res){
    Bing.web(req.params.searchWord, {
      top: 10,  // Number of results (max 50)
      skip: 3,   // Skip first 3 results
      options: ['DisableLocationDetection', 'EnableHighlighting']
    }, function(error, resss, body){
      res.json(body.d.results);
    });
  });
}

module.exports = REST_ROUTER;
