import React, { memo, useState, useEffect, useRef, useMemo, useCallback } from "react";
import Greetings from "../../components/Greetings";
import Counter from "../../components/Counter";
import CounterButton from "../../components/CounterButton";
import Users from "../../components/Users";

import "./Home.css";

function formReducer(state, formData) {
    const name = formData.get("name");
    const age = formData.get("age");
    if (!name && !age) {
        return { error: "Båda fälten är obligatoriska" };
    }
    return { success: `Hej ${name}, du är ${age} år ung!` };
}

const ExpensiveCalculation = memo(({ numbers }) => {
    console.log("ExpensiveCalculation re-rendered");
    const totalSum = useMemo(() => {
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    return (
        <div>
            <h2>Total sum: {totalSum}</h2>
        </div>
    );
});

const ChildComponent = memo(({ onClick }) => {
    console.log("ChildComponent re-rendered");
    return <button onClick={onClick}>Click me!</button>;
});

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [name, setName] = useState("");
    const [textName, setTextName] = useState("Anna");

    const [count, setCount] = useState(0);

    const handleCountClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const inputRef = useRef(null);
    const math = useRef(Math.random());

    const [data, setData] = useState([
        { id: 1, name: "Anna", age: 34 },
        { id: 2, name: "Eva", age: 32 },
        { id: 3, name: "Lena", age: 30 },
    ]);

    const object = {
        name: textName,
        age: 34,
    };

    useEffect(() => {
        inputRef.current.focus();
        console.log("Math", math.current);
        math.current = Math.random();

        console.log("textName was updated");
    }, []);

    /*     
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer has ticked");
        }, 1000);
        return () => clearInterval(timer);
    }, []); 
    */

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
        math.current = Math.random();
        setTextName(name);
        inputRef.current.value = "";
        setData((prevData) => prevData.map((item) => (item.id === 1 ? { ...item, name: name } : item)));
    };

    const handleAddNumber = () => {
        setNumbers([...numbers, numbers.length + 1]);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleInputSubmit();
        }
    };

    const [alias, setAlias] = useState("");

    const handleAliasChange = (e) => {
        setAlias(e.target.value);
    };

    const [pClass, setPClass] = useState(false);

    const handleAliasSubmit = (e) => {
        e.preventDefault();
        console.log("Formdata Alias:", alias);
        setAlias("");
    };

    const handleChangeClass = () => {
        setPClass(!pClass);
    };

    // MARK: Markup
    return (
        <>
            <p>Callback count: {count}</p>
            <ChildComponent onClick={handleCountClick} />
            <button onClick={handleAddNumber}>Lägg till nummer</button>
            <ExpensiveCalculation numbers={numbers} />
            <p>{math.current}</p>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Hello {object.name}
            </div>

            {/* Comments */}
            <div style={{ backgroundColor: "red", color: "white" }}>You are {object.age} years young.</div>
            <img className={isLoggedin ? "loggedin" : ""} src="https://picsum.photos/200/200" alt="" />

            <CounterButton />

            <label htmlFor="textinput">Textinput</label>
            <input
                ref={inputRef}
                onKeyDown={handleKeyPress}
                id="textinput"
                type="text"
                value={name}
                onChange={handleInputChange}
            />
            <button onClick={handleInputSubmit}>Submit</button>

            {/* Comments */}
            <Greetings title={greetingText} onClick={handleGreetingClick} />
            <Counter object={counterObject} />

            {data && data.map((item) => <Users item={item} />)}

            <form onSubmit={handleAliasSubmit}>
                <input type="text" name="alias" placeholder="Alias" value={alias} onChange={handleAliasChange} />
                <button type="submit">Submit</button>
            </form>

            <p className={pClass ? "klass2" : "klass1"} onClick={handleChangeClass}>
                Klassen ändras här
            </p>
        </>
    );
}

export default App;
