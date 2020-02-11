
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;



net.createServer(function (sock) {



    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);



    sock.on('data', function (data) {

        var i = 0;

        if(data.toString() == "+")
        {
                sock.write("OK");

               
        }
        else{

            if(data.toString() == "cat") {
                      
                i = i+1;
                console.log("OK")

                }

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