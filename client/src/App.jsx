import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home/Home"
import About from './About/About';
import Projects from './Projects/Projects';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
