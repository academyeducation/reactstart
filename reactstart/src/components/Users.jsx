import { Link } from "react-router-dom";

export default function Users({ item }) {
    return (
        <Link to={`/user/${item.id}`} className="user">
            <h1>{item.name}</h1>
            <p>{item.age}</p>
        </Link>
    );
}
