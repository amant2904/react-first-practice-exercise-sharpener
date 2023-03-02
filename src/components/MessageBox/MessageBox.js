import React from 'react'
import ReactDOM from 'react-dom';
import "./MessageBox.css"

const BackDrop = () => {
    return (
        <div className="backDrop"></div>
    )
}

const AlertBox = (props) => {
    return (
        <div className='message-box'>
            <div className="heading">
                <h1>Invalid Input</h1>
            </div>
            <div className="message">
                <p>{props.msg}</p>
            </div>
            <div className="okay_btn">
                <button onClick={props.btn_handler}>Okay</button>
            </div>
        </div>
    )
}

export default function MessageBox(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById("backDrop"))}
            {ReactDOM.createPortal(<AlertBox msg={props.message} btn_handler={props.btn_handler} />, document.getElementById("errorAlertBox"))}
        </React.Fragment>
    )
}
