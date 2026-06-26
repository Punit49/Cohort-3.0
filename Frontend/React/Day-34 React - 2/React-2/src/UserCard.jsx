import React from 'react'

const UserCard = ({name, role, isAvailable, experience, skills}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2><i>{role}</i></h2>
            <ul>
                {skills.map((s, idx) => <li key={idx}>{s}</li> )}
            </ul>
            <h2><i>Experience in years: {experience}</i></h2>
            <h2>Available: {isAvailable && "Yes" || "No"}</h2>
        </div>
    )
}

export default UserCard;
