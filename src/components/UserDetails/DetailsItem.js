import React from 'react'
import "./DetailsItem.css"

export default function DetailsItem(props) {
    return (
        <div className='items'>
            <h3>{props.name} ({props.age} years) - {props.college}</h3>
        </div>
    )
}
