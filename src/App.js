import React from 'react';
import { useState } from 'react';
import './App.css';
import UserForm from './components/userInput/UserForm';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const [details, setDetails] = useState([]);
  const liftUpFormValues = (username, age) => {
    setDetails((prevDetails) => {
      return [...prevDetails, {
        username: username,
        age: age,
        id: Math.random().toString()
      }]
    })
  }
  return (
    // we can make our custom wrapper
    // <Wrapper>
    //   <UserForm liftUpValuesInAppJs={liftUpFormValues} />
    //   <UserDetails allDetails={details} />
    //   {alertBox && <MessageBox message={alertMessage} btn_handler={alertBox_btn} />}
    // </Wrapper>


    // react fragment is an alternate of wrapper component which can be used to wrap jsx code. it can also be used directly <fregment></fregment> but for that we have to import that from react inside curly braces.
    <React.Fragment>
      <UserForm liftUpValuesInAppJs={liftUpFormValues} />
      <UserDetails allDetails={details} />
    </React.Fragment>
  )
}

export default App;
