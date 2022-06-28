import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

// actions
import { increment, decrement } from './actions'


const App = () => {
  // Getting acces to whole state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <>

      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
      
    </>
  )
}

export default App;