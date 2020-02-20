import React, { useEffect, useState } from 'react';
import App from './App';

// Array Map


const person = [ "Jan" , "far", "Deen"];


const Map = () => {

    
    return (

        <div className="App">
            <div>
                {
                    person.map((item, index) => {

                       <h1>{item.person}</h1>


                    })


                }           
            </div>
        </div>

    );
}

export default Map;



