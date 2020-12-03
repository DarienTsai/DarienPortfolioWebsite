import React from 'react';

let i = 0;
export default class Reads extends React.Component{

  render(){
  let reads = this.props.data.items.map(read => {return (<div key={'r'+i++} className="card"><a href={read.link} target="_blank" rel="noopener noreferrer" className="card-body">{read.name}</a><p>{read.desc}</p></div>)});

    return(
      <div id="reads" className="jumbotron mb-0">
        <h2>{this.props.data.title}</h2>
        <div className="readings">
          {reads}
        </div>
      </div>
    );
  }
} 