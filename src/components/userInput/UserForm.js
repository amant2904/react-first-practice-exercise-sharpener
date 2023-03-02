import React, { useState } from "react";
import "./UserForm.css"
import MessageBox from "../MessageBox/MessageBox"

export default function UserForm(props) {

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [alertBox, setAlertBox] = useState();

    const nameInput_handler = (e) => {
        setUsername(e.target.value);
    }
    const ageInput_handler = (e) => {
        setAge(e.target.value);
    }

    const submitBtn_handler = (e) => {
        e.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setAlertBox({ message: "You Have Entered Invalid Input" });
            return;
        }
        else if (parseInt(age) < 0) {
            setAlertBox({ message: "Age can not be less than 0" });
            return;
        }
        props.liftUpValuesInAppJs(username, age);
        setAge("");
        setUsername("");
    }

    const alertHandler = () => {
        setAlertBox();
        setAge("");
        setUsername("");
    }

    return (
        <div className="form-container">
            {alertBox && <MessageBox message={alertBox.message} btn_handler={alertHandler} />}
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