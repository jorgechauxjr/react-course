import { useEffect, useState } from "react";

//Objetivo: Optimizar el fetch usando dependencias en el useEffect
//Uso de pestaña "Network" en chrome developer tools para ver como se hacen los llamados

const SearchPosts = () => {
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching data: ", error))
    }, [query])

    return(
        <div>
            <h2>Fetch User - Search Posts</h2>
            <input
                type="text"
                placeholder="Buscar por titulo..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                />
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>{ `Title: ${post.title} Post: ${post.body}` }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchPosts;