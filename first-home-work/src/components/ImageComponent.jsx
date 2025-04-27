import React from 'react';
import Raccoon from "../assets/img/Raccoon.jpg"

function ImageComponent() {
    return (
      <div>
        <img 
          src={Raccoon} 
          alt="A curious raccoon looking at the camera in the forest during daytime" 
          width="400"
          height="300"
        />
      </div>
    );
  }
  
  export default ImageComponent;