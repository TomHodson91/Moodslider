import React, { Component } from 'react';
import skyLogo from './Images/skyLogo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import home from './Components/home';
import upload from './Components/upload';

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/upload',
    component: upload
  }
];

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
  };

  getSliderData = (sliderDataFromChild) => {
    this.setState({ slider1Val: sliderDataFromChild });
    if (this.state.slider1Val < 50) {
      //counts across the image boxes
      var ProgCounter = 0;

      for (var i = 0; i < this.state.array.length; i++) {
        if (this.state.myMoods[i] === "Agitated") {
          ProgCounter++;
          if (ProgCounter === 1) {
            this.setState({
              title1: this.state.myProgNames[i],
              img1: this.state.myImagePaths[i]
            })
          }
          if (ProgCounter === 2) {
            this.setState({
              title2: this.state.myProgNames[i],
              img2: this.state.myImagePaths[i]
            })
          }
          if (ProgCounter === 3) {
            this.setState({
              title3: this.state.myProgNames[i],
              img3: this.state.myImagePaths[i]
            })
          }
          if (ProgCounter === 4) {
            this.setState({
              title4: this.state.myProgNames[i],
              img4: this.state.myImagePaths[i]
            })
          }
          if (ProgCounter === 5) {
            this.setState({
              title5: this.state.myProgNames[i],
              img5: this.state.myImagePaths[i]
            })
          }
        }
      }
    } else {
      ProgCounter = 0;
      for (var j = 0; j < this.state.array.length; j++) {
        if (this.state.myMoods[j] === "Calm") {
          ProgCounter++;
          if (ProgCounter === 1) {
            this.setState({
              title1: this.state.myProgNames[j],
              img1: this.state.myImagePaths[j]
            })
          }
          if (ProgCounter === 2) {
            this.setState({
              title2: this.state.myProgNames[j],
              img2: this.state.myImagePaths[j]
            })
          }
          if (ProgCounter === 3) {
            this.setState({
              title3: this.state.myProgNames[j],
              img3: this.state.myImagePaths[j]
            })
          }
          if (ProgCounter === 4) {
            this.setState({
              title4: this.state.myProgNames[j],
              img4: this.state.myImagePaths[j]
            })
          }
          if (ProgCounter === 5) {
            this.setState({
              title5: this.state.myProgNames[j],
              img5: this.state.myImagePaths[j]
            })
          }
        }
      }
    }
  };

  getMovieData = (dataFromChild) => {
    this.setState({ array: dataFromChild });

    var ProgNames = [];
    var ImagePaths = [];
    var Moods = [];

    for (var i = 0; i < this.state.array.length; i++) {
      ProgNames[i] = this.state.array[i].getElementsByTagName("name")[0].innerHTML;
      ImagePaths[i] = this.state.array[i].getElementsByTagName("imagepath")[0].innerHTML;
      Moods[i] = this.state.array[i].getElementsByTagName("mood")[0].innerHTML;
    }

    this.setState({
      myProgNames: ProgNames,
      myImagePaths: ImagePaths,
      myMoods: Moods
    });
  };

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

            {routes.map(({ path, component: C }) => (
              <Route
                path={path}
                render={(props) => <C {...props} movieTitle1={movieTitle1} movieTitle2={movieTitle2} movieTitle3={movieTitle3} movieTitle4={movieTitle4} movieTitle5={movieTitle5} movieImage1={movieImage1} movieImage2={movieImage2} movieImage3={movieImage3} movieImage4={movieImage4} movieImage5={movieImage5} callbackFromParent={this.getMovieData} sliderCallbackFromParent={this.getSliderData} />}
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
  };
};

export default App;
