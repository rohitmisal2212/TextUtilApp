import "./App.css";
import React, { useState } from 'react'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const heloo = () => {
    console.log("helooooooo");
  }

  const showAlert = (type, message) => {
    setalert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const changeTheme = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#cea978"
      showAlert("success", "Dark mode ")
      // document.title = "TextUtils Dark Mode"
      // setInterval(() => {
      //   document.title = " Dark Mode"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "install now"
      // }, 1500);
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("primary", "light mode ")
      // document.title = "TextUtils Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} hel={heloo} changeTheme={changeTheme} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Textform heading="Enter Text To Analyaze" showAlert={showAlert} mode={mode} />} />
        </Routes>
      </Router >
    </>
  );
}
export default App;
