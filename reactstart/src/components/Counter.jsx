import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({ object }) {
    const [toggleClass, setToggleClass] = useState(false);

    const handleClick = () => {
        setToggleClass(!toggleClass);
    };

    return (
        <div
            className={toggleClass ? styles.counter2 : styles.counter}
            onClick={handleClick}
            onTouchStart={handleClick}
        >
            <ul>
                <li>{object.one}</li>
                <li>{object.two}</li>
                <li>{object.three}</li>
            </ul>
        </div>
    );
}
