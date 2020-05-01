import React from 'react'
import './card.style.css'

export const Card = props => {
    return (
        <div className = "card-container">
            <img alt = 'hero'
                src={`https://robohash.org/${props.hero.id}?set=set3&size=180x180`}
            />
            <h2 className="name-style">{props.hero.name}</h2><br/>
            {props.hero.email}
        </div>
    )
}