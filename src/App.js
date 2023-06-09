//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert  from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);

    },1500);


  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Myapp-Dark Mode';
      
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Myapp - Light Mode';
    }


  }
  return (
    <>
      {/* <Navbar title="My-App" aboutApp="About App"/> */}
      <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        


        {/* <TextForm /> */}
      </div>
        {<TextForm  showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>} 
        {/* <About /> */}
    </>
  );
}

export default App;
