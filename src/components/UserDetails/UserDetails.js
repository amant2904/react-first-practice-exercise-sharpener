import React from 'react'
import DetailsItem from './DetailsItem'
import "./UserDetails.css"

export default function UserDetails(props) {
    return (
        <div className='details_box'>
            {props.allDetails.length === 0 ? <h3>No Details yet... Add Some</h3> : props.allDetails.map((detail) => {
                return <DetailsItem key={detail.id} name={detail.username} age={detail.age.toString()} />
            })}
        </div>
    )
}
