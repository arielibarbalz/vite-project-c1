import Counter from "./Counter"

const Card = ({ gusto, cart, setCart }) => {
    // console.log(gusto)
    const {id, img, tipo, precio} = gusto
  
    const addCart = () => {
        setCart([...cart, gusto])
    }
    
    return (
    <div>
        <img src={img} alt="" />
        <h3>{tipo}</h3>
        <h4>{precio}</h4>

        <Counter/>

        <button onClick={addCart}>Agregar al carrito</button>
    </div>
  )
}

export default Card