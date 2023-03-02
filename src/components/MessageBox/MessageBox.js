import React from 'react'
import "./MessageBox.css"

export default function MessageBox(props) {
    return (
        <div className="backDrop">
            <div className='message-box'>
                <div className="heading">
                    <h1>Invalid Input</h1>
                </div>
                <div className="message">
                    <p>{props.message}</p>
                </div>
                <div className="okay_btn">
                    <button onClick={props.btn_handler}>Okay</button>
                </div>
            </div>
        </div>
    )
}
