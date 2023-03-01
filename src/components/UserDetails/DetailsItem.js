import React from 'react'
import "./DetailsItem.css"

export default function DetailsItem(props) {
    return (
        <div className='items'>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
        </div>
    )
}
