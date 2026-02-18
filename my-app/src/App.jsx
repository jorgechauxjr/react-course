import Card from './components/Card'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'

function App() {
  
  return (
    <section>
      <Card title="Card1" description="This is a description" />
      <Card title="Card Title 2" description="Description 2" />
      <Counter />
      <ToggleButton />
    </section>
  )
}

export default App
