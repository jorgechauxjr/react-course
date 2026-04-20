import { useEffect, useState } from "react";

const FetchUserListLoader = () => {
    const [users, setUsers] = useState([])
    // Estados de carga y estados de errores
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) {
                    throw new Error("Error al obtener los datos.")
                }
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        
        }

        fetchUsers();        
    }, [])

    // Componentes para Loading... y para Error
    /* Si alguno de las condiciones se cumple en lugar de mostrar la info
        se muestras el loader o el error*/

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if(error) {
        return <p>Error: {error}</p>
    }

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

export default FetchUserListLoader;