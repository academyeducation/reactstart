import styles from "./Counter.module.css";

export default function Counter({ object }) {
    return (
        <div className={styles.counter}>
            <ul>
                <li>{object.one}</li>
                <li>{object.two}</li>
                <li>{object.three}</li>
            </ul>
        </div>
    );
}
