import { useState } from "react";

const NameForm = () => {
    const [name, setname] = useState("");
    
    const handleChange = (event) => {
        setname(event.target.value)
    }
    
    return (
        <>
            <h1>Name Form</h1>
            <input
                type="text"
                placeholder="Type your name..."
                value={name}
                onChange={handleChange}
            />
            <p>Hello {name || "Visitor"}</p>
        </>
    );
}

export default NameForm;