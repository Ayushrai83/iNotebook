import About from "./Components/About";
import Home from "./Components/Home";
import  Alert  from "./Components/Alert";
import NoteState from "./context/notes/NoteState";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";

function App() {
  const[alert,setAlert] = useState(null)
  const showAlert= (message,type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert}/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
            <Route path="/signup" element={<Signup showAlert={showAlert} />}></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
