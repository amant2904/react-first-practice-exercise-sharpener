import React from 'react';
import { useState } from 'react';
import './App.css';
import UserForm from './components/userInput/UserForm';
import UserDetails from './components/UserDetails/UserDetails';
import MessageBox from './components/MessageBox/MessageBox';
// import Wrapper from './components/Helpers/Wrapper';

function App() {
  const [details, setDetails] = useState([]);
  const [alertBox, setAlertBox] = useState();
  // const [alertMessage, setAlertMessage] = useState("");
  const liftUpFormValues = (username, age) => {
    if (username.trim().length === 0 || age.trim().length === 0) {
      // setAlertMessage("You Have Typed Invalid Input");
      setAlertBox({ message: "You Have Entered Invalid Input" });
      return;
    }
    else if (parseInt(age) < 0) {
      // setAlertMessage("Age can not be less than 0");
      setAlertBox({ message: "Age can not be less than 0" });
      return;
    }
    setDetails((prevDetails) => {
      return [...prevDetails, {
        username: username,
        age: age,
        id: Math.random().toString()
      }]
    })
  }

  const alertBox_btn = () => {
    setAlertBox(false);
  }
  return (
    // <Wrapper>
    //   <UserForm liftUpValuesInAppJs={liftUpFormValues} />
    //   <UserDetails allDetails={details} />
    //   {alertBox && <MessageBox message={alertMessage} btn_handler={alertBox_btn} />}
    // </Wrapper>


    // react fragment is an alternate of wrapper component which can be used to wrap jsx code. it can also be used directly <fregment></fregment> but for that we have to import that from react inside curly braces.
    <React.Fragment>
      <UserForm liftUpValuesInAppJs={liftUpFormValues} />
      <UserDetails allDetails={details} />
      {alertBox && <MessageBox message={alertBox.message} btn_handler={alertBox_btn} />}
    </React.Fragment>
  )
}

export default App;
