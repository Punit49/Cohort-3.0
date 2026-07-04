import React, { useState } from 'react'

const App = () => {
  console.log("App Rendering....")

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Punit"
  });
  const [skills, setSkills] = useState(["React", "JS"]);
  let [num, setNum] = useState(10);
  
  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>User is - {user.name}</h1>
      <h1>Num is - {num}</h1>

      {skills.map((skill, idx) => <h1 key={idx}>{skill}</h1>)}

      <button onClick={() => {
        setCount(count+1);
      }}>Increase Count</button>

      <button onClick={() => {
        user.name = "Devendra";
        console.log(user);
      }}>Change Name</button>

      <button onClick={() => {
        skills.push("CSS");
        console.log(skills);
      }}>Push Skills</button>

      {/* <button onClick={() => {
        user.name = "Devendra";
        console.log(user);
      }}>Change Name</button> */}

      {/* <button onClick={() => {
        num++;
        console.log(num)
      }}>Change Num</button> */}
    </div>
  )
}

// two way binding, form handling, state lifting up, children se data kese lenge

export default App
