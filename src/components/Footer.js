import React from 'react';

export default class Footer extends React.Component{

  render(){
    return(
      <div id="footer" className="jumbotron mb-0 bg-dark rounded-0 text-light">
        <p>{"\u00a9 " + new Date().getFullYear() + " Darien Tsai"}</p>
      </div>
    );
  }
}