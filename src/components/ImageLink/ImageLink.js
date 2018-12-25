import React from 'react';
import './ImageLink.css';

const ImageLink = ({onInputChange , onButtonClick}) =>{
    return(
        <div>
            <p>
            {'This App will Detect Faces in your Picture'}
            </p>
            <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
            <button className='w-30 grow f4 link ph3 dib white bg-dark-blue' onClick={onButtonClick}>Detect</button>
            </div>
            </div>
         </div>
    );
}
export default ImageLink;