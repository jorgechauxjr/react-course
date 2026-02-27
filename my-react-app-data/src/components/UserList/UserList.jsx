import { useState, useEffect } from "react";

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error("El error al hacer fetch es: ", error))
}, [])


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