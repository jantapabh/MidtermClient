
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;
let j = 0;
let countCat = 0;
let countDog = 0;
let countBird = 0;



net.createServer(function (sock) {

    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {

        let i = 1;


        if (data.toString() == "+") {

            console.log("+");
            sock.write("OK");

            j = 1;

        }
        else {

            console.log("-");
            sock.write("OK");
        }

        if (j == 1) {

            console.log("cat");
            countCat = countCat + 1;    

        } else {


            console.log("dog");
            countDog = countDog + 1;    
        
        }

    });

    sock.on('close', function (data) {


        console.log("cat: ",countCat);
        sock.destroy();

    });

    sock.on('error', function (error) {
        // console.log(error);
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);