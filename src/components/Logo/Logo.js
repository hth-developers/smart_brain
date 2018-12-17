import React from 'react';
import Tilt from 'react-tilt';
import './Logo.scss';
import logo from './logo.png';

const Logo = () =>{
    return(
        <div className='body ma4 mt0 '>
            <Tilt className=" logo Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> 
            <img style={{paddingTop: '20px'}} alt='logo' src={logo}/> 
            </div>
            </Tilt>
        </div>
    );
}
export default Logo;