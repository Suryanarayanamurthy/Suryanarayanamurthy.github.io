 import React, { Component } from 'react';
 import projectsData from '../data/projectsData';

 export function Header (){
    return (
          <nav className="navbar navbar-fixed-top navbar-inner header">

            <div className="container">
              <div className="navbar-brand">
                <a href="#" > Suryanarayanamurthy </a>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href='#' className="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href='#' className="nav-link">
                    <i className="fa fa-envelope icon"></i>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Suryanarayanamurthy' className="nav-link" target="_blank">
                    <i className="fa fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href='https://de.linkedin.com/in/suryanarayanamurthy1' className="nav-link" target="_blank">
                    <i className="fa fa-linkedin-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href='https://angel.co/suryanarayanamurthy-hanumantha-vajjhala' className="nav-link" target="_blank">
                    <i className="fa fa-angellist icon"></i>
                  </a>
                </li>
                </ul>
            </div>
            </nav>
    );
}


export function Footer () {
    return (
      <footer className="footer">
        <span>
        Built by Suryanarayanamurthy
        </span>
      </footer>
    );
}

function Project (props) {
  const projectData = props.projectData;
  return (
      <div className="project-container">
        <div>
          <a href='#' target="_blank">
            <h2>{projectData.title}</h2>
          </a>
          <a href='#' target="_blank">
            GitHub
          </a>
          <div>{projectData.date}</div>
          <h3>Background</h3>
          <div>{projectData.background}</div>
          <h3>Role</h3>
          <div>{projectData.role}</div>
          <h3>Tech Stack</h3>
          <div >
            <ul>
            {projectData.tech_stack.map((tech_item,index) => <li key={index}>{tech_item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
}

export class Projects extends Component{
  render(props){
    return(<div>
      {this.props.projectsData.map((projectItem,index)=> (<Project key={index} projectData={projectItem} />))}
        </div>
      );
  }
}

