import './App.css';

import Button from "./components/Button";
import Input from "./components/Input";
import {useState} from "react";

function App() {
    const [showDiv, setShowDiv] = useState(true)
    return (
        <div className="App">
            This is app
            <Input showDiv={showDiv}/>
            <Button/>
        </div>
    );
}

export default App;
