import { useState, useEffect } from "react";

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then()
}, [])

    return (
        <>
            <p>USER LIST</p>
        </>
    );
}

export default UserList