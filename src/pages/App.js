import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {projectsData} from '../data/projectsData';


import {Header,Footer, Projects} from '../components/components';

class App extends Component {
  render() {

    return (
      <div className="main-app-container container-fluid">
          <Header />
        <div className="introduction row">
        <div className="col-md-8">
        <h3 >Hi, I am Surya.</h3> <br/>
          <p>I am a Software Engineer in Hamburg.</p>
          <p>I'm originally from Bangalore, India. <br/>I graduated in 2009. Since then I’ve worked on projects ranging from Mission Critical Bosch Security systems to sports teams management apps. I love learning new technologies and harnessing technology to make new and exciting things.</p>
           </div>
           <div className="col-md-4">
           <img src="profilePic.jpg" alt="Surya" className="profile-pic"></img>
           </div>
        </div>
        <div className="main-app-nav">Some of my selected projects:</div>
          <Projects projectsData={projectsData}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
