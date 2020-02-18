// TCP Client  58

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;
let i = 1;
let j = 0;


var client = new net.Socket();

client.connect(PORT, HOST, function () {

    console.log('Connected');
    client.write("Jantapa"); // ส่งชื่อ
    
});


client.on('data', function (data) {

    var resp = data.toString();

    if(resp.toString() == "OK")
    {

        console.log(resp.toString());
        
        // var number = 50;
       
        client.write("50");

         var sum = parseInt(data.toString());
         console.log("Sum is  :   " + sum);
  

                      
    }
});

client.on('error', function (error) {
    // console.log(error);
});


// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});