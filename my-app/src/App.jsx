import Card from './components/Card'
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import ToggleButton from './components/ToggleButton'
import CounterWithEffect from './components/CounterWithEffect'
import List from './components/List'
import CardCountry from './components/CardCountry'
import CounterV2 from './components/CounterV2'
import CounterEffectV2 from './components/CounterEffectV2'

function App() {
  
  const countries = [
        { id: 1, name:"USA", description: "Country in North America" },
        { id: 2, name:"Israel", description:"Country in Middle East" },
        { id: 3, name:"Colombia", description: "Country in South America"},
        { id: 4, name:"Mexico", description: "Country in Central America" },
        { id: 5, name:"Germany", description: "Country in Europe" },
        { id: 6, name:"Nigeria", description: "Country in Africa" }
    ];

  return (
    <section>
      {
        countries.map(country => (
          <CardCountry
            key={country.id}
            name={country.name}
            description={country.description}
          />
        ))
      }
      <CounterV2 />
      <CounterEffectV2 />
      <Card title="Card1" description="This is a description" />
      <Card title="Card Title 2" description="Description 2" />
      <List />
      <Counter />
      <ToggleButton />
      <NameForm />
      <CounterWithEffect />
    </section>
  )
}

export default App
