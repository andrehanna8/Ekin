
import React from "react";
import NikeVideo from "./videoplayback.mp4";
import "./VideoComponent.css";

function VideoComponent() {
  return (
    <div className="nike-video-container">
      <video autoPlay loop muted playsInline>
        <source src={NikeVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoComponent;