import './App.css'
// import Button from './components/Button'
import Counter from './components/Counter'
import CounterWithUsereducer from './components/CounterWithUsereducer/CounterWithUsereducer';

/**
 * 
 * Para tipar una funcion y un parametro
 * usamos : y el tipo
 */

function greet(name: string):string {
  return `Hola ${name}`
}

function App() {

  // const handleClick = () => alert("Ya diste click")
  console.log(greet("Juan"));

  return (
    <>
      {/* <Button onclick={handleClick} label="Click me"/> */}
      {/* <Counter /> */}
      <CounterWithUsereducer />
    </>
  )
}

export default App
