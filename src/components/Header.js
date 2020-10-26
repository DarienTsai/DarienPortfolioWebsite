import React from 'react';
import HeaderCarousel from './HeaderCarousel';
import {Paper} from '@material-ui/core';

export default class Header extends React.Component{
  render(){
    return(
      <div className="jumbotron jumbotron-fluid">
        <div>
          <h1>This is me</h1>
          <HeaderCarousel/>
        </div>
      </div>
    );
  }
}