var express = require("express");
var bodyParser  = require("body-parser");
var rest = require("./REST.js");
var app  = express();

function REST(){
    var self = this;
    self.configureExpress();
};

REST.prototype.configureExpress = function() {
      var self = this;
      console.log("test");
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      var router = express.Router();
      app.use('/api', router);
      var rest_router = new rest(router);
      console.log("Calling start server");
      self.startServer();
}

REST.prototype.startServer = function() {
  console.log("Problem here");
      app.listen(3000,function(){
          console.log("All right ! I am alive at Port 3000.");
      });
}

REST.prototype.stop = function(err) {
  console.log("There was a problem");
    process.exit(1);
}

new REST();
