import React from "react";
import {useState} from "react";

const Button = () => {
const [showSecondButton, setShowSecondButton] = useState(false)

    return (
        <div>
            <button onClick={()=>{setShowSecondButton(true)}}>First button</button>
            {showSecondButton && <button>Second button</button>}
            <br/>
            State: {showSecondButton.toString()}
        </div>
    )
}

export default Button;