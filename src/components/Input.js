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
            <br/>
            <div data-testid="greeting-test">How to test in react</div>
        </div>
    )

}

export default Input;