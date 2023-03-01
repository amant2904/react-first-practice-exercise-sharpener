import React, { useState } from "react";
import "./UserForm.css"

export default function UserForm(props) {

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const nameInput_handler = (e) => {
        setUsername(e.target.value);
    }
    const ageInput_handler = (e) => {
        setAge(e.target.value);
    }

    const submitBtn_handler = (e) => {
        e.preventDefault();
        props.liftUpValuesInAppJs(username, age);
        setAge("");
        setUsername("");
    }

    return (
        <div className="form-container">
            <form onSubmit={submitBtn_handler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={nameInput_handler} value={username} type="text" name="username" id="username" placeholder="Enter Username" />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input onChange={ageInput_handler} value={age} type="number" name="age" id="age" placeholder="Enter Age" />
                </div>
                <button type="submit">Add details</button>
            </form>
        </div>
    )
}