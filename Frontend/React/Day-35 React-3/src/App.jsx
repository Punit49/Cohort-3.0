import React from 'react'
import { useState } from 'react';

const App = () => {
    let [count, setCount] = useState(0);
    // const [flag, setFlag] = useState(true);
    
    // console.log(flag);

    // console.log(count);

    return (
        // The Problem
        // <div>
        //   <h1>count - {count}</h1>
        //   <button onClick={() => {
        //     count++;
        //     App();
        //     console.log(count);
        //   }}>Increase Count</button>
        // </div>

        // The solution - useState() 
        // <div>
        //   <h1>count - {count}</h1>
        //   <button onClick={() => {
        //     setCount(count+1);
        //     console.log(count);
        //   }}>Increase Count</button>
        //   <br />

        //   <button onClick={() => {
        //     setFlag(false);
        //   }}>Change Boolean</button>
        // </div>

        // Calling setCOunt multiple times - 

        // Clouser Stales -
        <div>
            <h1>count - {count}</h1>
            <button onClick={() => {
              setTimeout(() => {
                setCount(prev => prev + 10); 
              }, 4000);

              setCount(20);
            }}>Increase Count</button>
        </div>
    )
}

export default App;
