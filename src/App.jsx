import './App.css'
import Navbar from './Components/Navbar'
import Pizza from './Components/Pizza'
import Shop from './Components/Shop'

function App() {
  const pizzas = ['Anchoas', 'Especial', 'Hawaina', 'Anchoas']

  return (
    <>
      <Navbar />

      {/* <Pizza gusto={pizzas[0]}/>
      <Pizza gusto={pizzas[1]}/>
      <Pizza gusto={pizzas[2]}/> */}

      {/* {pizzas.map((pizza, indice) => <h4 key={indice}>{pizza}</h4>)} */}

      <Shop />

    </>
  )
}

export default App
