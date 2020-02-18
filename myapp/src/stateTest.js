import React, {useState} from 'react';
import App from './App';


// Props
const ShowName = (props) => {

    <div>

        Name : {props.name} <br />
        Surname : {props.surname}
   </div>

}


const StateTest = () => {

    let [name, setName] = useState("Jan");
    let [surname, setSurName] = useState("Binheem");

    return(

        <div>
            
            <ShowName name={name} surname={surname} />
            
        </div>
    );

}

export default StateTest;