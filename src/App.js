import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import React, { useState } from 'react'
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light")

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#050554";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";

    }
  }
  return (
    <>
      <BrowserRouter>

        <Navbar title="textUtils" component="About" Mode={Mode} toggleMode={toggleMode}  />

        <Routes>
          <Route exact path="/About" element = {<About  Mode = {Mode} toggleMode={toggleMode}/>}/>
          <Route exact path="/" element = {<Textutils Mode = {Mode} toggleMode = {toggleMode}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
