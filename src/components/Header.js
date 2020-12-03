import React from 'react';
import HeaderCarousel from './HeaderCarousel';
import Img from '../media/header.png';

export default class Header extends React.Component{
  render(){
    return(
      <div className="jumbotron jumbotron-fluid mb-0" id="header">

        <div id="header-img">
          <img src={Img} alt="Header Image"/>
        </div>

        <div id="header-info">
          <h1>{this.props.data.title}</h1>
          <HeaderCarousel data={this.props.data.items}/>
        </div>

      </div>
    );
  }
}