
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
            
            // console.log("Jan");

            let name = data.toString();

            sock.write("OK");

            if(!data.toString()){

                  j = 1;
                
                
            }else{

                  j = 0;


            }
           
        }else{

            if(j == 1)
            {

                var sum = 0;

                if(data.toString() == name && sum == 0)
                {

                    sum = 0 + (parseInt(data.toString()));

                    sock.write(sum.toString());

                    sock.destroy();



                }else{


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
