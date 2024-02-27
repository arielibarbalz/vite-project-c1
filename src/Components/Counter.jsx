import React, { useState } from 'react'

const Counter = () => {
    // console.log(useState('algo'))

    // const estado = useState()[0]
    // const modificador = useState()[1]

    const [counter, setCounter] = useState(0)
    // console.log(counter)
    // let contador = 0

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

  return (
    <div className='btn-group'>
        <button onClick={restar}>-</button>
        <h4>{counter}</h4>
        <button onClick={sumar}>+</button>
        
    </div>
  )
}

export default Counter