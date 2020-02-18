
// TCP Server 58


var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;
var j = 0;


net.createServer(function (sock) {

    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {

        if (data.toString() == 'Jantapa') {

            let name = data.toString();

            sock.write("OK");

            console.log(data.toString());

            if (data.toString() == "Jantaapa") {

                j = 1;

            }
        


            if (j == 1) {

                var sum = 0;

                if (sum == 0) {
                    sum = 0 + (parseInt(data.toString()));
                    sock.write(sum.toString());
                    sock.destroy();

                } else {

                    sum = sum + (parseInt(data.toString()));
                    sock.write(sum.toString());
                    sock.destroy();

                }
            }
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
