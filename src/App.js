import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [greenmode, setGreenMode] = useState(null);
  const [navbarColor, setNavbarColor] = useState('light');

  const ShowAlert = (message, typeo) => {
    setAlert({
      msg: message,
      type: typeo
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      ShowAlert('The dark mode is enabled', 'success');
      // To update title with the mode
      document.title = 'TextUtils - Dark Mode';

      //If we want to seek attention of users
      // setInterval(() => {
      //   document.title = 'TextUtils is an amazing website';
      // }, 2000);
      // setInterval(() => {
      //   document.title= 'Download TextUtils Now!!'
      // }, 1200);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert('The light mode is enabled', 'success');
      document.title = 'TextUtils - Light Mode'
    }
  }

  // const greentoggle = ()=>{
  //   if (!greenmode)
  //   {
  //     setGreenMode('green');
  //     document.body.style.backgroundColor= '#38e438';
  //   }
  //   else
  //   {
  //     setGreenMode(null);
  //     document.body.style.backgroundColor = 'white';
  //   }
  // }

  const toggleNavbar = (color) => {
    if (navbarColor === color) {
      setNavbarColor('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setNavbarColor(color);
      document.body.style.backgroundColor = color;
    }
  }
  return (
    // <Router>
    <>
      <Navbar title='TextUtils' aboutText="About Textutils" mode={mode} toggleMode={toggleMode} toggleNavbar={toggleNavbar} navbarColor={navbarColor}></Navbar>
      <Alert alert={alert}></Alert>

      {/*For default proptypes we need to pass this as without arguments */}
  {/* <Navbar></Navbar> */}
  {/* I will put it in div with class name "container" which will format it well. As well as I will give external classname as my-3 to add space vertically */}
  
      <div className="container my-3">
      <TextForm ShowAlert={ShowAlert} heading="Please Enter Text" subheading="Your Text Summary" mode={mode} />
        {/* <Routes>
          <Route exact path="/" element=
            {<TextForm ShowAlert={ShowAlert} heading="Please Enter Text" subheading="Your Text Summary" mode={mode} />} /> */}
          {/* <Route exact path="/about" element={<About />} /> */}

        {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
