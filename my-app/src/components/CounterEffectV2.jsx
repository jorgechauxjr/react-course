import { useEffect, useState } from "react";

const CounterEffectV2 = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log(`==EffectV2 - El contador cambio a ${counter}`)
    }, [counter])

    return (
        <>
            <h1>Counter Side Effect V2</h1>
            <h3>Counter is in { counter }</h3>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
}

export default CounterEffectV2;