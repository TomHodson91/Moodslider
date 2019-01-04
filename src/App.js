import React, { Component } from 'react';
import skyLogo from './Images/skyLogo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val: 50,
      val2: 50,
      val3: 50,
      val4: 50
    }
  };

  updateVal(event) {
    this.setState({val: event.target.value});
  }
  updateVal2(event) {
    this.setState({val2: event.target.value});
  }
  updateVal3(event) {
    this.setState({val3: event.target.value});
  }
  updateVal4(event) {
    this.setState({val4: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={skyLogo} className="App-logo" alt="skyLogo" />
          </div>
          <div className="headers-container">
            <div className="title-bar">
              Welcome to Moodslider!
            </div>
            <div className="nav-bar">
              I am the nav bar
            </div>
          </div>
        </header>
        <div className="inner-wrapper">
          <main>
            <div className="sliders-container">
              <div className="calm-container">
                <h1 className="emotion">Agitated</h1>
                <input type="range" min="1" max="100" value={this.state.val} onChange={this.updateVal.bind(this)} class="slider" id="myRange"/>
                <h1 className="emotion">Calm</h1>
              </div>
              <div className="sad-container">
                <h1 className="emotion">Happy</h1>
                <input type="range" min="1" max="100" value={this.state.val2} onChange={this.updateVal2.bind(this)} class="slider" id="myRange"/>
                <h1 className="emotion">Sad</h1>
              </div>
              <div className="wide-awake-container">
                <h1 className="emotion">Tired</h1>
                <input type="range" min="1" max="100" value={this.state.val3} onChange={this.updateVal3.bind(this)} class="slider" id="myRange"/>
                <h1 className="emotion">Wide Awake</h1>
              </div>
              <div className="fearless-container">
                <h1 className="emotion">Scared</h1>
                <input type="range" min="1" max="100" value={this.state.val4} onChange={this.updateVal4.bind(this)} class="slider" id="myRange"/>
                <h1 className="emotion">Fearless</h1>
              </div>
            </div>
            <div className="programmes-container">
              <div className="programme1-container">
                <div className="programme1">No Content</div>
                <div className="programme1-title">No Content</div>
              </div>
              <div className="programme2-container">
                <div className="programme2">No Content</div>
                <div className="programme1-title">No Content</div>
              </div>
              <div className="programme3-container">
                <div className="programme3">No Content</div>
                <div className="programme1-title">No Content</div>
              </div>
              <div className="programme4-container">
                <div className="programme4">No Content</div>
                <div className="programme1-title">No Content</div>
              </div>
              <div className="programme5-container">
                <div className="programme5">No Content</div>
                <div className="programme1-title">No Content</div>
              </div>
            </div>
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
