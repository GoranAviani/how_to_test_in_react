import React, {useState} from "react";

const Button = () => {
    const [showSecondButton, setShowSecondButton] = useState(false)

    return (
        <div>
            <button data-testid="button" onClick={() => {
                setShowSecondButton(true)
            }}>First button
            </button>
            {showSecondButton && <button data-testid="button">Second button</button>}
            <br/>
            State: {showSecondButton.toString()}
        </div>
    )
}

export default Button;