//hook personalizado

import { useState } from "react";

// si se pasa el valor directamnete a useState dejaría de ser personalizado
function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    const reset = () => setCount(initialValue)

    return {
        count,
        increment,
        decrement,
        reset,
    }
}

export default useCounter