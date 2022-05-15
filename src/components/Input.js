import React, {useState} from "react";

const Input = () => {
    const [userInput, setUserInput] = useState('')

    return(
        <div>
            <input onChange={(e)=>{setUserInput(e.target.value)}}/>
            <br/>
            {userInput}
        </div>
    )

}

export default Input;