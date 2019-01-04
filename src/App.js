import React, { Component } from 'react';
import skyLogo from './Images/skyLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={skyLogo} className="App-logo" alt="skyLogo" />
          </div>
          <div className="headers-container">
            <div className="title-bar">
              I am the title bar
            </div>
            <div className="nav-bar">
              I am the nav bar
            </div>
          </div>
        </header>
        <div className="inner-wrapper">
          <main>
            <h1>This will be the body of Moodslider</h1>
          </main>
        </div>
        <footer className="App-footer">
          <div className="logo-container">
            <img src={skyLogo} className="App-logo" alt="skyLogo" />
          </div>
          <div className="quote-container">
            <h6>
              It’s our people that make Sky Europe’s leading entertainment company. That’s why we work hard to be an inclusive employer, so everyone at Sky can be their best.
            </h6>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
