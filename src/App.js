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


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
