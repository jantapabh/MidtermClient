
// TCP Server 58


var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;
var j = 0;


net.createServer(function (sock) {

    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {

        if(data.toString() == 'Jantapa')
        {
            
            console.log("Jan");

            let name = data.toString();

            sock.write("OK");

           
        }
    
    }

    );

    sock.on('close', function (data) {


        // console.log("Not Connect");

    });

    sock.on('error', function (error) {
        // console.log(error);
    });


}).listen(PORT, HOST);



console.log('Server listening on ' + HOST + ':' + PORT);
