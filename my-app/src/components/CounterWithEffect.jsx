import { useEffect, useState } from "react";

const CounterWithEffect = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`El contador cambió a: ${count}`)
    }, [count])
    return (
        <>
            <p>Counter is in { count }</p>
            <button onClick={() => setCount(count + 1)}>Icrement</button>
        </>
    );

}

export default CounterWithEffect;