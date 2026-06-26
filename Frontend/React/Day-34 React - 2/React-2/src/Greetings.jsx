import React from 'react'

const Greetings = ({name, age, isAdmin, hobbies, onDelete }) => {
    name = "Unkown"
  return (
    <div>
        <h1>Hello, {name}</h1>
        <p>{age}</p>
        {isAdmin && <span>Admin hai</span>}
        <ul>
            {hobbies.forEach(h => 
                <li>{h}</li>
            )}
        </ul>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Greetings
