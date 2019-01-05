import React from 'react';

class home extends React.Component {
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
    this.setState({ val: event.target.value });
  }
  updateVal2(event) {
    this.setState({ val2: event.target.value });
  }
  updateVal3(event) {
    this.setState({ val3: event.target.value });
  }
  updateVal4(event) {
    this.setState({ val4: event.target.value });
  }
  render() {
    return (
      <div className="inner-wrapper">
        <main>
          <div className="sliders-container">
            <div className="calm-container">
              <h1 className="emotion">Agitated</h1>
              <input type="range" min="1" max="100" value={this.state.val} onChange={this.updateVal.bind(this)} className="slider" id="myRange" />
              <h1 className="emotion">Calm</h1>
            </div>
            <div className="sad-container">
              <h1 className="emotion">Happy</h1>
              <input type="range" min="1" max="100" value={this.state.val2} onChange={this.updateVal2.bind(this)} className="slider" id="myRange" />
              <h1 className="emotion">Sad</h1>
            </div>
            <div className="wide-awake-container">
              <h1 className="emotion">Tired</h1>
              <input type="range" min="1" max="100" value={this.state.val3} onChange={this.updateVal3.bind(this)} className="slider" id="myRange" />
              <h1 className="emotion">Wide Awake</h1>
            </div>
            <div className="fearless-container">
              <h1 className="emotion">Scared</h1>
              <input type="range" min="1" max="100" value={this.state.val4} onChange={this.updateVal4.bind(this)} className="slider" id="myRange" />
              <h1 className="emotion">Fearless</h1>
            </div>
          </div>
          <div className="programmes-container">
            <div className="programme1-container">
              <div className="programme1">{this.props.showFromParent}</div>
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
    )
  }
}

export default home;