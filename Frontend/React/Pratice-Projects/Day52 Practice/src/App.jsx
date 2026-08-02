import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  console.log("App Renderingg...");

  const [count, setCount] = useState(0);

  // const expensiveCalculations = useMemo(() => {
  //   let sum = 1;
  //   console.log("calc running...");
  //   for(let i = 1; i <= 1000000090; i++){
  //     sum += i;
  //   }
  //   return sum;
  // }, []);

  const info = useMemo(() => {
    return {
      role: "Dev"
    }
  }, []);

  // const greet = useMemo(() => {
  //   console.log("Hello guys");
  // }, []); // use useCallback here, as useMemo expects a return value

  const greet = useCallback(() => {
    console.log("Hello Guys");
  }, []);

  // console.log(info === info);
  // console.log(info)

  return (
    <div>
        App Component
        <h1>Count - {count}</h1>
        <h1>Calculations - {}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Home name={"Punit" + count} />
        <About greet={greet} />
        {/* <About info={info} /> */}
    </div>
  )
}

export default App
