import { useState } from "react";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <h1>Toggle Button</h1>
            <p>Button is: { isActive ? "ACTIVE ✅" : "Inactive ✖️" }</p>
            <button onClick={() => setIsActive(!isActive)}> {isActive ? "Click to Desactivate ✖️" : "Click to activate ✅"}</button>
        </>
    )

}

export default ToggleButton;