import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Pizza from './Components/Pizza'
import Shop from './Components/Shop'
import Contact from './Components/Contact'

function App() {
  const [contact, setContact] = useState(false)
  return (
    <>
      <Navbar setContact={setContact}/>
      {contact ? <Contact/> : null}
      {/* <Form/> */}
      <Shop />
      <Footer/>
    </>
  )
}

export default App


//Temas para el parcial:
 
//Crear un proyecto
//Componentes
//Props
//Map
//Estados (useState)
//Eventos y formularios