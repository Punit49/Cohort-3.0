import React, { useCallback, useState } from 'react'
import Home from './components/Home';
import About from './components/About';

const App = () => {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState({name: "Punit", id: 101});
    console.log("App Rendering...");

    // greet is just storing refernce so on every re render the reference of it is changing so it will cause home and about to re render.
    const greet = useCallback(() => {
        console.log("Hello");
    }, [user.id]);

    return (
      <div>
          App Component
          <h1>Count - {count}</h1>
          <h1>username - {user.name}</h1>
          <button onClick={() => setUser({...user, id: 10})}>Change Username</button>
          <button onClick={() => setCount(count + 1)}>Increment</button>

          <Home greet={greet} />
          <About greet={greet} />
      </div>
    )
}

export default App
