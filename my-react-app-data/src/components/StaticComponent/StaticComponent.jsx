const StaticComponent = () => {
    const items = ["manzana", "banano", "cereza"];

    return (
        <ul>
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    );

};

export default StaticComponent