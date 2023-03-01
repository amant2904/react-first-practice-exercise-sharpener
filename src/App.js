import { useState } from 'react';
import './App.css';
import UserForm from './components/userInput/UserForm';
import UserDetails from './components/UserDetails/UserDetails';
import MessageBox from './components/MessageBox/MessageBox';

function App() {
  const [details, setDetails] = useState([]);
  const [alertBox, setAlertBox] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const liftUpFormValues = (username, age) => {
    if (username.trim().length === 0 && age.trim().length === 0) {
      setAlertMessage("You Have Typed Invalid Username and Age");
      setAlertBox(true);
      return;
    }
    else if (username.trim().length === 0) {
      setAlertMessage("You Have Typed Invalid Username");
      setAlertBox(true);
      return;
    }
    else if (age.trim().length === 0) {
      setAlertMessage("You Have Typed Invalid Age");
      setAlertBox(true);
      return;
    }
    else if (parseInt(age) < 0) {
      setAlertMessage("Age can not be less than 0");
      setAlertBox(true);
      return;
    }
    setDetails([...details, {
      username: username,
      age: age,
      id: Math.random().toString()
    }])

  }

  const alertBox_btn = () => {
    setAlertBox(false);
  }
  return (
    <div className="all_code">
      <UserForm liftUpValuesInAppJs={liftUpFormValues} />
      <UserDetails allDetails={details} />
      {alertBox && <MessageBox message={alertMessage} btn_handler={alertBox_btn} />}
    </div>
  )
}

export default App;
