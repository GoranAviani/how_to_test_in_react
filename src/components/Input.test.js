import {render} from '@testing-library/react'
import Input from "./Input";

describe("input component test", ()=>{

    it("rendered input", ()=>{
        const {getByTestId} = render(<Input showDiv={false}/>)
        const input = getByTestId("search-bar")
        expect(input).toBeInTheDocument()

    })


})