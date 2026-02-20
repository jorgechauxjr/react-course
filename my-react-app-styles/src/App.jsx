import Card from "./components/Card/Card"
import CardSecondary from "./components/Card/CardSecondary"
import Button from "./components/Button/Button"
import TailwindText from "./components/Text/Text"

function App() {
  
  return (
    <>
      <Card />
      <CardSecondary />
      <Button blue><p>Hola</p></Button>
      <Button><p>Gris</p></Button>
      a<TailwindText />
    </>
  )
}

export default App
