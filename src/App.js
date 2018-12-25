import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLink from './components/ImageLink/ImageLink';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '7d87a68218fa4dc780d1decd68d22ff2'
 });

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


class App extends Component {
 constructor(){
        super();
        this.state={
          input:'',
          imageURL:''
        }
      }

      onInputChange = (event) =>{
        this.setState({input:event.target.value});
      }

      onButtonClick = () =>{
        this.setState({imageURL: this.state.input})
  
        app.models.predict("a403429f2ddf4b49b307e318f00e528b",
         this.state.input).then(
            function(response) {
              console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
            },
            function(err) {
              // there was an error
            }
          );
      }

 render() {
    return (
      
      <div className="App">
      <Particles className='particals' 
                      params={particalsOption}
                       />
       <Navigation />
       <Logo />
       <Rank />
       <ImageLink onInputChange={this.onInputChange} 
       onButtonClick={this.onButtonClick}/>
       <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
