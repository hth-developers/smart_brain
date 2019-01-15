import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
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
      value:200,
      density:{
        enable: true,
        value_area:900
      }
    }
  }

}


class App extends Component {
 constructor(){
        super();
        this.state={
          input:'',
          imageURL:'',
          box:{},
          route: 'signin'
        }
      }

      calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return{
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
      }

      displayFaceBox = (box) => {
        console.log(box);
        this.setState({box: box})
      }

      onInputChange = (event) =>{
        this.setState({input:event.target.value});
      }

      onButtonClick = () =>{
        this.setState({imageURL: this.state.input})
  
        app.models.predict(Clarifai.FACE_DETECT_MODEL,
         this.state.input)
         .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
         .catch(err=> console.log(err));
      }

      onRouteChange = (route) =>{
        this.setState({route:route});
      }

 render() {
    return (
      
      <div className="App">
      <Particles className='particals' 
                      params={particalsOption}
                       />
        
       <Navigation onRouteChange={this.onRouteChange}/>
      { this.state.route === 'signin'?
       <Signin onRouteChange={this.onRouteChange} />:
       <div>
       <Logo />
       <Rank />
       <ImageLink onInputChange={this.onInputChange} 
       onButtonClick={this.onButtonClick}/>
       <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
       </div>
       }
      </div>
    );
  }
}

export default App;
