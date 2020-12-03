import React from 'react';
import { GitHub, LinkedIn } from "@material-ui/icons";
import MailIcon from "@material-ui/icons/Mail";

export default class About extends React.Component{
  render(){
    return(
      <div id="about" className="jumbotron mb-0 d-flex justify-content-center">
        <div className="contact d-flex flex-column justify-content-center">
          <h2>{this.props.data.title}</h2>  
          <div className="mx-auto d-flex justify-content-around w-75">
            <a href={this.props.data.items[2]} target="_blank" rel="noopener noreferrer" className="text-dark"><MailIcon/></a>
            <a href={this.props.data.items[0]} target="_blank" rel="noopener noreferrer" className="text-dark"><GitHub/></a>
            <a href={this.props.data.items[1]} target="_blank" rel="noopener noreferrer" className="text-dark"><LinkedIn/></a>
          </div>
        </div>
        <h1 className="display-4">{this.props.data.bio}</h1>
      </div>
    );
  }
}