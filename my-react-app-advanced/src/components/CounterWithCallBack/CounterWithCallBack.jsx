import React, { useCallback, useMemo, useState } from "react";

/**
Dos Componentes
- Hijo: Renderizado, solo cambia cuando el counter cambie
- Padre: Va a tener la lógica del estado global
 */

/*
- Sin Memo: Si escribes en el input (text cambia),
el componente Child se renderiza de nuevo aunque counter no cambió.
Verás "Renderizando Child".

- Con Memo: Si escribes en el input (text cambia),
React.memo compara las props de Child (counter),
ve que es el mismo valor y NO renderiza el hijo.
El "Renderizando Child" no aparece.
*/


// Descomentar para probar sin memo
/*
const Child = ({counter}) => {
    console.log("Renderizando Child")
    return <p>Counter: {counter}</p>
} */

// Con memo
const Child = React.memo(({counter}) => {
    console.log("Renderizando Child")
    return <p>Counter: {counter}</p>
})

function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
        console.log("Calculando...")
        return num * 2;
    }, [num])
    return <p>Resultado: {result}</p>
}


// Componente padre
function CounterWithCallBack() {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState(""); // Nuevo estado en el padre

    const increment = useCallback(() => {
        setCounter(prev => prev + 1)
    }, []); 

    return (
        <div>
            <h2>CounterWithReactMemo</h2>
            <button onClick={increment}>
                Increment
            </button>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe algo" />
            <Child counter={counter}/>
            <ExpensiveCalculation num={counter}/>
        </div>
    )
}

export default CounterWithCallBack;