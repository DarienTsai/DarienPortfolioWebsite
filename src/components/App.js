import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';

import '../App.css';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Header/>
     <Skills/>
     <Hobbies/>
     <Projects/>
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
