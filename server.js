
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;
var j = 1;
var i = 1;



net.createServer(function (sock) {



    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);



    sock.on('data', function (data) {

        if(data.toString() == "+")
        {
                sock.write("OK");

        }
        else{

            sock.write("NO");
        }

      

       
    });

    sock.on('close', function (data) {

        // sock.destroy();

    });

    sock.on('error', function (error) {
        // console.log(error);
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);