const http = require('http');
const hello = require('./hello');
const server = http.createServer(function (req, res) {
    res.write("Hello World " + hello.helloall());
    console.log(hello);
    res.end();
});
server.listen(3000); 
