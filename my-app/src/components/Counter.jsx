import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Counter</h1>
            <h3>Counter is in { counter }</h3>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
}

export default Counter;