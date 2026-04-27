import './App.css'
import Button from './components/Button'

function App() {

  const handleClick = () => alert("Ya diste click")
  return (
    <>
      <Button onclick={handleClick} label="Click me"/>
    </>
  )
}

export default App
