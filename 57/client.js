// TCP Client

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;
let i = 1;
let j = 0;


var client = new net.Socket();

client.connect(PORT, HOST, function () {


    console.log('Connected');
    client.write("+"); // + or -


});

client.on('data', function (data) {

    var resp = data.toString().trim();

    if(resp.toString() == "OK")
    {
        client.write('bird');
              
    }
});

client.on('error', function (error) {
    // console.log(error);
});


// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});