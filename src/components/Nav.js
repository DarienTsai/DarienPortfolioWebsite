import React from 'react';

export default class Nav extends React.Component{

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#header">Darien Tsai</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#skills">Skills</a>
            <a className="nav-item nav-link" href="#projects">Projects</a>
            <a className="nav-item nav-link" href="#about">Connect</a>
            <a className="nav-item nav-link" href="#reads">Reads</a>

            <a className="nav-item nav-link" href="./review.html">Article Review</a>
            <a className="nav-item nav-link" href="./cat.html">Rhetoric</a>
          </div>
        </div>
      </nav>
    )
  }
} 