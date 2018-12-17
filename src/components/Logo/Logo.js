import React from 'react';
import Tilt from 'react-tilt';
import '../../main.scss';

const Logo = () =>{
    return(
        <div className='body ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> 👽 </div>
            </Tilt>
        </div>
    );
}
export default Logo;