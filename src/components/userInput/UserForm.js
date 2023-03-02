import React, { useState, useRef } from "react";
import "./UserForm.css"
import MessageBox from "../MessageBox/MessageBox"

export default function UserForm(props) {

    // const [username, setUsername] = useState("");
    // const [age, setAge] = useState("");

    const inputUsername = useRef();
    const inputAge = useRef();
    const inputCollege = useRef();

    const [alertBox, setAlertBox] = useState();

    // const nameInput_handler = (e) => {
    //     setUsername(e.target.value);
    // }
    // const ageInput_handler = (e) => {
    //     setAge(e.target.value);
    // }

    // const submitBtn_handler = (e) => {
    //     e.preventDefault();
    //     if (username.trim().length === 0 || age.trim().length === 0) {
    //         setAlertBox({ message: "You Have Entered Invalid Input" });
    //         return;
    //     }
    //     else if (parseInt(age) < 0) {
    //         setAlertBox({ message: "Age can not be less than 0" });
    //         return;
    //     }
    //     props.liftUpValuesInAppJs(username, age);
    //     setAge("");
    //     setUsername("");
    // }

    const submitBtn_handler = (e) => {
        e.preventDefault();
        const enteredUsername = inputUsername.current.value;
        const enteredAge = inputAge.current.value;
        const enteredCollege = inputCollege.current.value;
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0) {
            setAlertBox({ message: "You Have Entered Invalid Input" });
            return;
        }
        else if (+enteredAge < 0) {
            setAlertBox({ message: "Age can not be less than 0" });
            return;
        }
        props.liftUpValuesInAppJs(enteredUsername, enteredAge, enteredCollege);
        inputUsername.current.value = "";
        inputAge.current.value = "";
        inputCollege.current.value = "";
    }

    const alertHandler = () => {
        setAlertBox();
        // setAge("");
        // setUsername("");
    }

    return (
        <div className="form-container">
            {alertBox && <MessageBox message={alertBox.message} btn_handler={alertHandler} />}
            <form onSubmit={submitBtn_handler}>
                <div>
                    <label htmlFor="username">Username</label>
                    {/* <input onChange={nameInput_handler} value={username} type="text" name="username" id="username" placeholder="Enter Username" /> */}
                    <input ref={inputUsername} type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    {/* <input onChange={ageInput_handler} value={age} type="number" name="age" id="age" placeholder="Enter Age" /> */}
                    <input ref={inputAge} type="number" name="age" id="age" />
                </div>
                <div>
                    <label htmlFor="college">College Name</label>
                    <input ref={inputCollege} type="text" name="college" id="college" />
                </div>
                <button type="submit">Add details</button>
            </form>
        </div>
    )
}