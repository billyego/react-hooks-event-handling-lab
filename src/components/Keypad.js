import React from "react";


function Keypad (){

function handleChange(){
    console.log('Entering password...')
}
    return (
        <div>
        <input type="passWord"onChange={
            handleChange
        } ></input>
        </div>
    )
}

export default Keypad;