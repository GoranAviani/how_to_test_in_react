import React, {useState} from "react";

const Input = () => {
    const [userInput, setUserInput] = useState('')

    return (
        <div>
            <input data-testid="search-bar"
                   placeholder="search..."
                   onChange={(e) => {
                setUserInput(e.target.value)
            }}/>
            <br/>
            <h2 data-test-id="display-seaerch">{userInput}</h2>
        </div>
    )

}

export default Input;