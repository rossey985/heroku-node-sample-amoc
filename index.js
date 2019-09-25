var app = require('express')();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.send(__dirname + './index.htmls');
});

http.listen(3000, function(){
  console.log('listening on *:'+ port);
});