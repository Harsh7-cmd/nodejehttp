const http=require("http");
http.createServer(function (req, res) {
  if(req.url ==='/user')
 { res.writeHead(200, {'Content-Type': 'application/json'});
  res.end("{'name':'Harsh'}");}
  if(req.url === '/order')
 { res.writeHead(200, {'Content-Type': 'application/json'});
  res.end("{'id':'1','Item:'2'}");}
}).listen(8080);
