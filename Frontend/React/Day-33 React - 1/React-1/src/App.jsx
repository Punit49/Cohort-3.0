import React, { useState } from 'react'

const App = () => {
  console.log("Rendering...");

  const [user, setUser] = useState({
    name: "John",
    age: 20,
  });

  console.log(user);

  return (
    <div>
      <button onClick={() => {
        setUser({...user, age: 30});
      }}>Click2</button>
    </div>
  )
}

export default App
