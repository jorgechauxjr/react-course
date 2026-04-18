import Card from './components/Card'
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import ToggleButton from './components/ToggleButton'
import CounterWithEffect from './components/CounterWithEffect'
import List from './components/List'

function App() {
  
  return (
    <section>
      <List />
      <Card title="Card1" description="This is a description" />
      <Card title="Card Title 2" description="Description 2" />
      <Counter />
      <ToggleButton />
      <NameForm />
      <CounterWithEffect />
    </section>
  )
}

export default App
