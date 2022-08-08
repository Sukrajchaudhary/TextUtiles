import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";



function App() {
  //*****************************//
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);//This IS state
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  // **************************************//

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode Has Been Enabled', 'success')
      document.title = 'Dark Mode Is Enable';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode Has Been Enabled', 'success')
      document.title = 'Light Mode Is Enable';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/"> */}
              <TextForm heading="Enter your Text Here" showAlert={showAlert} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
