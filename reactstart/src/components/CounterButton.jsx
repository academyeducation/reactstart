import { useState } from "react";
import "./CounterButton.css";

export default function CounterButton() {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        console.log("The button was clicked");
        setCount(count + 1);
    };

    return (
        <>
            <button className="button" onClick={handleClick}>
                Button
            </button>
            <p>{count}</p>
        </>
    );
}
