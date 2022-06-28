import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  // Getting acces to whole state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <>

      <h1>Counter {counter}</h1>

      <button>+</button>
      <button>-</button>

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
      
    </>
  )
}

export default App;