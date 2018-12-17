import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigation />
       <Logo />
       <ImageLink />
       {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
