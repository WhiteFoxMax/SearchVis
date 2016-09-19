function REST_ROUTER(router) {
    var self = this;
    self.handleRoutes(router);
}

REST_ROUTER.prototype.handleRoutes= function(router) {
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    })
}

module.exports = REST_ROUTER;
