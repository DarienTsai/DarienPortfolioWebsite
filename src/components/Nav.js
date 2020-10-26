import React from 'react';

export default class Nav extends React.Component{

  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Darien Tsai</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">Skills</a>
            <a class="nav-item nav-link" href="#">Projects</a>
            <a class="nav-item nav-link" href="#">About</a>
            <a class="nav-item nav-link" href="#">Connect</a>
          </div>
        </div>
      </nav>
    )
  }
} 