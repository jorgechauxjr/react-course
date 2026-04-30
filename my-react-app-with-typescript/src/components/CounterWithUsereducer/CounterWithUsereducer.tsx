//Manejo de estados complejos con useReducer

import { useReducer } from "react";

//dependiendo la accion modificamos el estado
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const CounterWithUsereducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
    <>
        <h2>Counter Advanced</h2>
        <div>
            <p>Counter: { state.count }</p>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement -</button>
            <button onClick={() => dispatch({ type: "increment" })}>Increment +</button>
        </div>
    </>
    )
}

export default CounterWithUsereducer;