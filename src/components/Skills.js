import React from 'react';

let key = 0;
export default class Skills extends React.Component{

  render(){

    let primary = this.props.data.icons1.map( icon => {
      return <figure key={key++}><img src={icon.link} alt="icon" width="50"/><figcaption>{icon.name}</figcaption></figure>
    });

    let secondary = this.props.data.icons2.map( icon => {
      return <figure key={key++}><img src={icon.link} alt="icon" width="50"/><figcaption>{icon.name}</figcaption></figure>
    });;

    return(
      <div id="skills" className="jumbotron mb-0">
        <h2>{this.props.data.title1}</h2>
        <div className="d-flex justify-content-around flex-wrap skills">
          {primary}
        </div>
        <h2>{this.props.data.title2}</h2>
        <div className="d-flex justify-content-around flex-wrap skills">
          {secondary}
        </div>
      </div>
    );
  }
}