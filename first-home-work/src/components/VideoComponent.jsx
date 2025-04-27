import React from 'react';
import RabbitVideo from "../assets/video/Rabbit-video.mp4"; // импорт локального видео

function VideoComponent() {
  return (
    <div>
      <video width="400" height="300" controls>
        <source src={RabbitVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}

export default VideoComponent;