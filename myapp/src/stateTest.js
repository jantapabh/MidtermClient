import React, {useState} from 'react';
import App from './App';
// Props
const ShowName = (props) => (

    <div>
        Name : {props.name} <br />
        Surname : {props.surname}
        ID: {props.id}
   </div>

)
const StateTest = () => {

    let [name, setName] = useState("Jan");
    let [surname, setSurName] = useState("Binheem");
    let [id , setID] = useState("6035512034");

    return(

        <div>
            
            <ShowName name={name} surname={surname} id={id}/>

            <input type="text"
            value={id}
            onChange={(e) => setID(e.target.value)}
            placeholder="name"
            />
            
        </div>
    );

}
export default StateTest;