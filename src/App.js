import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

 class Header extends Component {
  render() {
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
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span>
        Built by Suryanarayanamurthy
        </span>
      </footer>
    );
  }
}

//some DomParsing to insclide html in a string ...
// error as object cannot be put in react shit, wil deal with this shit later, for now just hardcode the self intro string, to move forward.
/*let selfIntroXmlString = "I am currently working as a Lead Software Developer/ Technology Manager in a start-up in Berlin.\n my responsibility here include  develop and manage a web app called <a href='http://www.hellocoach.de/'> HelloCoach</a> . I'm also involved in Sprint planning, managing a team of interns and freelancers.\n I have about 6+ years of experience in software development, in various domains and technologies. I am looking forward for a new opportunity to learn and develop in competitive and challenging environment.";
  let parser = new DOMParser()
  let parsedSelfIntroDoc = parser.parseFromString( selfIntroXmlString, "text/xml");
  let selfIntro = parsedSelfIntroDoc.firstChild;
  */


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <p className="App-intro">
          I am currently working as a Lead Software Developer/ Technology Manager in a start-up in Berlin.\n my responsibility here include  develop and manage a web app called <a href='http://www.hellocoach.de/' target="_blank"> HelloCoach</a> . I'm also involved in Sprint planning, managing a team of interns and freelancers.\n I have about 6+ years of experience in software development, in various domains and technologies. I am looking forward for a new opportunity to learn and develop in competitive and challenging environment.
        </p>
        <div>Some of my selected pet projects</div>
        <div>
          {//put projects here
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
