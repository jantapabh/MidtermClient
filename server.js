
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;

let j = 0;



net.createServer(function (sock) {

    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function (data) {

        let i = 1;


        if (data.toString() == "+") {

            j = 1;

        }
        else {

            j = 2;

        }

        if (j == 1)   //ถ้า client ส่งมาเป็น + 
        {
            if (data.toString() == "cat") {


            }
            else if (data.toString() == "dog") {


            } else {




            }

        }
        else if (j == 2) {

            if (data.toString() == "cat") {


            }
            else if (data.toString() == "dog") {


            } else {




            }

        }
        else {


            sock.destroy();
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