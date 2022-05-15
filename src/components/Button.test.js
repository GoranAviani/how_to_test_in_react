import {getByTestId, queryByTestId, render, fireEvent, act} from '@testing-library/react'
import Button from "./Button";

describe("button component test", () => {

        it("rendered button", () => {
            const {getByTestId} = render(<Button/>)
            const button = getByTestId("button")
            expect(input).toBeTruthy()
        })

        it("render second button", ()=>{

        })
    }
)