import React from 'react'
import './TeamMember.css'

const TeamMember = ({ src, name, title }) => {
    return (
        <div className="team-member">
            <img src={src} />
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    )
}

export default TeamMember