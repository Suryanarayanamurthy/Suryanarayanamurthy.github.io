import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {projectsData} from './data/projectsData';


import {Header,Footer, Projects} from './components/components';

class App extends Component {
  render() {
    console.log('hi'+projectsData);
    return (
      <div className="App">
          <Header/>
        <p className="App-intro">
          I am currently working as a Lead Software Developer/ Technology Manager in a start-up in Berlin.\n my responsibility here include  develop and manage a web app called <a href='http://www.hellocoach.de/' target="_blank"> HelloCoach</a> . I'm also involved in Sprint planning, managing a team of interns and freelancers.\n I have about 6+ years of experience in software development, in various domains and technologies. I am looking forward for a new opportunity to learn and develop in competitive and challenging environment.
        </p>
        <div>Some of my selected pet projects</div>
        <div>
          <Projects projectsData={projectsData}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
