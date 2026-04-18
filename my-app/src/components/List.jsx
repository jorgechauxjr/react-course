const List = () => {
    const countries = [
        { id: 1, name:"USA" },
        { id: 2, name:"Israel" },
        { id: 3, name:"Colombia" },
        { id: 4, name:"Mexico" },
        { id: 5, name:"Germany" },
        { id: 6, name:"Nigeria" }
    ];
    return (
    <>
        <h1>Countries</h1>
        <ul>
            {
                countries.map((country) => {
                return <li key={country.id}>{country.name}</li>
                })
            }
        </ul>
    </>
);
}

export default List;