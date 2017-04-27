var fs = require('fs')
,express = require('express')
, app = express()
, url =require('url')
, http = require('http').createServer(app)
, bodyParser = require("body-parser")
,request = require('request')
,ne = require('node-each')
,exec = require("child_process").exec
,path = require('path')
,mongoose   = require('mongoose')
,port = process.env.PORT || 6000;
var dateFormat = require('dateformat');
var configDB = require('./model/db.js');
mongoose.connect(configDB.url);
app.use('/static', express.static('uploads'));
app.use('/static', express.static(__dirname + '/uploads'));
app.use(bodyParser.urlencoded({
    extended: false
}));

var location            = require('./model/location.js');

app.get('/getGeoLocation',function(req,res,next)
{
  var latitude =req.query.latitude;
  var longitude =req.query.longitude;
  var apicall = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
 request({
     method: 'get',
     url: apicall
    // headers: {"Content-type":'application/x-www-form-urlencoded',"Authorization":'Token 9a570f07845cb3643942ca2c1541dcad',"IP":'223.31.72.170:8888'},
},function(err,httpResponse,body)
 {
   if(err ==null)
   {
     res.send(body);
   }

 });

});
http.listen(port);
process.on('uncaughtException', function (err) {
console.log(err);
});


