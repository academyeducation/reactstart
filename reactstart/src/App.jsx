import { useState } from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import Users from "./components/Users";

import "./App.css";

function App() {
    const [name, setName] = useState("Anna");
    const [textName, setTextName] = useState("Anna");

    const [data, setData] = useState([
        { id: 1, name: "Anna", age: 34 },
        { id: 2, name: "Eva", age: 32 },
        { id: 3, name: "Lena", age: 30 },
    ]);

    const object = {
        name: textName,
        age: 34,
    };

    const handleMouseEnter = () => {
        console.log("Mouse Enter...");
    };

    const handleMouseLeave = () => {
        console.log("Mouse Leave...");
    };

    const isLoggedin = false;

    const greetingText = "Hello world!";

    const counterObject = {
        one: "Ett",
        two: "Två",
        three: "Tre",
    };

    const handleGreetingClick = () => {
        console.log("Greetings was clicked");
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleInputSubmit = () => {
        console.log(name);
        setTextName(name);

        setData((prevData) => prevData.map((item) => (item.id === 1 ? { ...item, name: name } : item)));
    };

    return (
        <>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Hello {object.name}
            </div>

            {/* Comments */}
            <div style={{ backgroundColor: "red", color: "white" }}>You are {object.age} years young.</div>
            <img className={isLoggedin ? "loggedin" : ""} src="https://picsum.photos/200/200" alt="" />

            <CounterButton />

            <label htmlFor="textinput">Textinput</label>
            <input id="textinput" type="text" onChange={handleInputChange} />
            <button onClick={handleInputSubmit}>Submit</button>

            {/* Comments */}
            <Greetings title={greetingText} onClick={handleGreetingClick} />
            <Counter object={counterObject} />

            {data && data.map((item) => <Users item={item} />)}
        </>
    );
}

export default App;
