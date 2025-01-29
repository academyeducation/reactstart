export default function Users({ item }) {
    return (
        <div className="user">
            <h1>{item.name}</h1>
            <p>{item.age}</p>
        </div>
    );
}
