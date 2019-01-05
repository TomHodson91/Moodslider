import React, { Component } from 'react';
import skyLogo from './Images/skyLogo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import home from './home';
import upload from './upload';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <div className="logo-container">
                <img src={skyLogo} className="App-logo" alt="skyLogo" />
              </div>
              <div className="headers-container">
                <div className="title-bar">
                  Welcome to Moodslider!
                </div>
                <div className="nav-bar">
                  <Link to={"/"} className="link">
                    <div className="moodslider-home-link">Moodslider home page</div>
                  </Link>
                  <Link to={"/upload"} className="link" >
                    <div className="upload-link">Upload Content</div>
                  </Link>
                </div>
              </div>
            </header>
            <Route exact path='' component={home} />
            <Route exact path='/upload' component={upload} />
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
        </Router>
      </div>

    );
  }
}

export default App;
