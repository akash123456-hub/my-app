//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }


  }
  return (
    <>
      {/* <Navbar title="My-App" aboutApp="About App"/> */}
      <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <TextForm /> */}
      </div>
      {<TextForm heading="Enter the text to analyze below" />}
      {/* <About/> */}
    </>
  );
}

export default App;
