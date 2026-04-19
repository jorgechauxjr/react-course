import { useEffect, useState } from "react";

const FetchUserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching data: ", error))
    }, [])

    return(
        <div>
            <h2>Fetch User List V2</h2>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{ `${user.name} from ${user.address.city}` }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchUserList;