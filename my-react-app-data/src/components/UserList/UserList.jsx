import { useState, useEffect } from "react";

const UserList = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');


useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) throw new Error('Error en la respuesta');
                return response.json();
        })
        .then(data => {
            setUsers(data)
            setLoading(false);
        })
        .catch(error => {
            console.error("El error al hacer fetch es: ", error)
            setError(error.message);
            setLoading(false);
        })
}, []);

if (loading) return <div>Cargando...</div>;
if (error) return <div>{error}</div>;


    return (
        <div>
            <h1>Listas de usuarios</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{`Nombre: ${user.name}, Ciudad: ${user.address.city}`}</li>
                    ))}
            </ul>
        </div>
    );
}

export default UserList