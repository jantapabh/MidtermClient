import React, { useEffect, useState } from 'react';
import App from './App';



const EffectTest = () => {

    const URL = 'https//api.github.com/users/jantapabh'

    const [avatar_url, setAvatar_url] = useState('');
    const [name, setNmae] = useState("");

    useEffect(() => {

        fetchUsers()
        console.log(..);
    })


    const fetchUsers = async () => {

       const respone = await fetch(URL);
       setAvatar_url((await respone.json()).avatar_url);
       console.log(avatar_url);
       setNmae((await respone.json()).name);

    }

    return (

        <div className="App">
            <div>
                <h1>Hello</h1>
                <img src={avatar_url}  alt="Jan" width="80px" />
                <button onClick={fetchUsers}>Click it !</button>


            </div>
        </div>

    );
}

export default EffectTest;



