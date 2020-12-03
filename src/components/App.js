import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Reads from './Reads';
import data from '../data.js';
import skillsOut from '../media/skills-o.svg';
import projectsOut from '../media/projects-o.svg';


import '../App.css';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Header data={data.header}/>
     <img className="transition-out" src={projectsOut} alt=""/>
     <Skills data={data.skills}/>
     <img className="transition-out" src={skillsOut} alt=""/>
     <Projects data={data.projects}/>
     <img className="transition-out" src={projectsOut} alt=""/>
     <About data={data.about}/>
     <Footer data={data.footer}/>
     <Reads data={data.reads}/>
    </div>
  );
}

export default App;
