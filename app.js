//imports for nodeJS
var express = require("express");
var bodyParser = require("body-parser")
var cors = require("cors");
var useragent = require("express-useragent");
//create an instance of express fpr pur app and instantiate bodyParder and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//Api url
var api ="/api/whoami";

app.get(api, function(req, res, next){

var language = req.acceptsLanguages();
var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
//req.hearer['user-agent']; same way of getting data for software
var ipaddress = req.ip;

res.json({"ipaddress" : ipaddress, "language" : language[0], "software" : software})

})
app.listen(3000, function(){
    console.log('It's working);
});
