import React from "react";
import NavBar from "./common/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills"
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import MyExperience from "./core/Resume/MyExperience";
import MyEducation from "./core/Resume/MyEducation";
import MySkills from "./core/Resume/MySkills";
import AboutMe from "./core/Resume/AboutMe";

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col font-inter bg-richblack-900 inter -tracking-wider">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="skills" element={<Skills/>}/>
        {/* <Route path="resume" element={<Resume/>}/> */}
        <Route path="work" element={<Work/>}/>
        <Route path="contact" element={<Contact/>}/>

        <Route element={<Resume/>}>
          <Route path="resume/experience" element={<MyExperience/>}/>
          <Route path="resume/education" element={<MyEducation/>}/>
          <Route path="resume/skills" element={<MySkills/>}/>
          <Route path="resume/about-me" element={<AboutMe/>}/>
        </Route>
      </Routes>
    </div>
  )
};

export default App;
