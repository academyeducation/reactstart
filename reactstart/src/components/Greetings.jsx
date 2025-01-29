export default function Greetings({ title, onClick }) {
    return <h1 onClick={onClick}>{title}</h1>;
}
