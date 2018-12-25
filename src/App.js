import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import Rank from './components/Rank/Rank';

const particalsOption = {
  particles:{
    number:{
      value:300,
      density:{
        enable: true,
        value_area:800
      }
    }
  }

}

/*
      working properly
      */

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particals' 
                      params={particalsOption}
                       />
       <Navigation />
       <Logo />
       <Rank />
       <ImageLink />
       {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
