import About from "./Components/About"
import Home from "./Components/Home"
import {Alert} from "./Components/Alert"
import NoteState from "./context/notes/NoteState";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert message="This is amazing React course" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;