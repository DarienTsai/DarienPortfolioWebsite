import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import BuildIcon from '@material-ui/icons/Build';

function Card(props){

  let icon = <span/>;
  if (props.data.link === 'wip'){
    icon = <BuildIcon className="card-icon"/>;
  }
  else if (props.data.link !== ''){
    icon = <a href={props.data.link} target="_blank" rel="noopener noreferrer" className="card-icon"><LinkIcon/></a>;
  }
  return (
    <div className="card">
      <div className="card-header">
        {icon}{props.data.name}
      </div>
      <img className="card-img-top" src={props.data.img} alt="Project Thumbnail"/>
      <div className="card-body">
        <span className="card-text">{props.data.desc}</span>
      </div>
    </div>
  );
}

let key = 0;
export default class Projects extends React.Component{

  render(){
    let projects = this.props.data.items.map(projects => {return <Card data={projects} key={key--}/>});

    return(
      <div id="projects">
        <h2>{this.props.data.title}</h2>
        <div id="projects-view">
          <div className="contain">
            {projects}
          </div>
        </div>
      </div>
    );
  }
}
