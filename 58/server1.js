
// TCP Server 58
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 1337;
var j = 0;
let countCat = 0;
let countDog = 0;
let countBird = 0;



net.createServer(function (sock) {

    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {


        if (data.toString() == "+" || data.toString() == "-") {

            sock.write("OK");

            console.log(data.toString()) //แสดงเครื่องหมาย

            if (data.toString() == "+") {

                j = 1;

            }
            else {

                j = 0;
            }

        }

        else {

            if (j == 1) {

                if (data.toString() == 'cat') {
                    countCat = countCat + 1;
                    console.log({ cat: +countCat, dog: +countDog, bird: +countBird });
                    sock.destroy();
                }
                else if (data.toString() == 'dog') {
                    countDog = countDog + 1;
                    console.log({ cat: +countCat, dog: +countDog, bird: +countBird });
                    sock.destroy();
                }
                else {
                    countBird = countBird + 1;
                    console.log({ cat: +countCat, dog: +countDog, bird: +countBird });
                    sock.destroy();
                }
            }
            else {

                if (data.toString() == 'cat') {
                    countCat = countCat - 1;
                    console.log({ cat: +countCat, dog: +countDog, bird: +countBird });
                    sock.destroy();
                }
                else if (data.toString() == 'dog') {
                    countDog = countDog - 1;
                    console.log({ cat: +countCat, dog: +countDog, bird: +countBird });
                    sock.destroy();
                }
                else {
                    countBird = countBird - 1;
                    console.log({ cat: +countCat, dog: +countDog, bird: +countBird });
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
