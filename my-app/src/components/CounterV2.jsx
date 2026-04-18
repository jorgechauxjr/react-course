import { useState } from "react"

const CounterV2 = () => {
    const [count, setCount] = useState(0);
    return (
    
    <>
        <p>===================</p>
        <h1>Counter V2</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h3>Value: {count}</h3>
        <p>===================</p>
        {/* {console.log(`El CV2 está en ${count}`)} */}
    </>
)
}

export default CounterV2