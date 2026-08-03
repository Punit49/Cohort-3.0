import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './feature/counterSlice';

const App = () => {

  const {count} = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <h1>
      Redux Toolkit Count - {count}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment("Punit"))}>Increment</button>
    </h1>
  )
}

export default App;
