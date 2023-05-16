import { Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProjectFull from "./Component/ProjectCard/ProjectFull";
import SchrollPageTop from "./Component/SchrollPageTop";

function App() {
  return (
    <>
    <SchrollPageTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/project/:id" element={<ProjectFull/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
