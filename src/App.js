import React, { Component } from 'react';
import skyLogo from './Images/skyLogo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import home from './Components/home';
import upload from './Components/upload';

const routes = [
  {
    path: '/home',
    component: home,
  },
  {
    path: '/upload',
    component: upload
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title1: 'no content',
      title2: 'no content',
      title3: 'no content',
      title4: 'no content',
      title5: 'no content',
      img1: 'no content',
      img2: 'no content',
      img3: 'no content',
      img4: 'no content',
      img5: 'no content',
      slider1Val: 50,
      array: null
    };
  }

  getSliderData = (sliderDataFromChild) => {
    this.setState({slider1Val: sliderDataFromChild});
    const placeholder = this.state.array;
    if(this.state.slider1Val < 50) {
      console.log('less than 50!')
      let filtered = this.state.array.filter((show) => {
        return show.getElementsByTagName('mood')[0].innerHTML === 'Wide Awake'
    })
      this.setState({array: filtered});
  } else {
    this.setState({array: placeholder})
  }
  console.log(this.state.array)
  }
  
  getMovieData = (dataFromChild) => {
    this.setState({array: dataFromChild});

    let dataFromChild1 = this.state.array[0].getElementsByTagName("name")[0].innerHTML
    let dataFromChild2 = this.state.array[1].getElementsByTagName("name")[0].innerHTML
    let dataFromChild3 = this.state.array[2].getElementsByTagName("name")[0].innerHTML
    let dataFromChild4 = this.state.array[3].getElementsByTagName("name")[0].innerHTML
    let dataFromChild5 = this.state.array[4].getElementsByTagName("name")[0].innerHTML
    let image1 = this.state.array[0].getElementsByTagName("imagepath")[0].innerHTML
    let image2 = this.state.array[1].getElementsByTagName("imagepath")[0].innerHTML
    let image3 = this.state.array[2].getElementsByTagName("imagepath")[0].innerHTML
    let image4 = this.state.array[3].getElementsByTagName("imagepath")[0].innerHTML
    let image5 = this.state.array[4].getElementsByTagName("imagepath")[0].innerHTML
    this.setState({
      title1: dataFromChild1,
      title2: dataFromChild2,
      title3: dataFromChild3,
      title4: dataFromChild4,
      title5: dataFromChild5,
      img1: image1,
      img2: image2,
      img3: image3,
      img4: image4,
      img5: image5,
    });
  }

  render() {
    var movieTitle1 = this.state.title1;
    var movieTitle2 = this.state.title2;
    var movieTitle3 = this.state.title3;
    var movieTitle4 = this.state.title4;
    var movieTitle5 = this.state.title5;
    var movieImage1 = this.state.img1;
    var movieImage2 = this.state.img2;
    var movieImage3 = this.state.img3;
    var movieImage4 = this.state.img4;
    var movieImage5 = this.state.img5;
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
                  Moodslider
                </div>
                <div className="nav-bar">
                  <Link to={"/home"} className="link">
                    <div className="moodslider-home-link">Moodslider Home</div>
                  </Link>
                  <Link to={"/upload"} className="link" >
                    <div className="upload-link">Upload Content</div>
                  </Link>
                </div>
              </div>
            </header>
            
          {routes.map(({path, component: C}) => (
            <Route 
              path = {path} 
              render = {(props) => <C {...props} movieTitle1={movieTitle1} movieTitle2={movieTitle2} movieTitle3={movieTitle3} movieTitle4={movieTitle4} movieTitle5={movieTitle5} movieImage1={movieImage1} movieImage2={movieImage2} movieImage3={movieImage3} movieImage4={movieImage4} movieImage5={movieImage5} callbackFromParent={this.getMovieData} sliderCallbackFromParent={this.getSliderData} onUpdate={() => this.getTracks()}/>}
            />
          ))}
            
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
