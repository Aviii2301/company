import React from "react";
import "../App.css"; 

function Container() {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/xTBDsVl9fQQ?si=wncZHJCkOCscCxQ5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/xTBDsVl9fQQ?si=wncZHJCkOCscCxQ5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Container;
