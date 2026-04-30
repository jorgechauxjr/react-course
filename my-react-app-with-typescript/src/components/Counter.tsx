import { useState } from "react";

/**
 * 
 * Para tipar un estado usamos < > y adentro el tipo
 */

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    return (
    <>
        <button onClick={increment}>Increment {count}</button>
    </>
    )
}

export default Counter;