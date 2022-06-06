import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  // dark mode enable and disable
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1f2023';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
      <Navbar title="Text Modify" aboutText="About Us" mode={mode} toggleMode={ toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Upload or enter the text" mode={mode}/>
      </div>
      {/* <About/> */}
      
    </>
  );
}

export default App;
