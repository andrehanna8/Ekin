
import React from "react";
import NikeVideo from "./videoplayback.mp4";
import "./VideoComponent.css";
import { Link } from "react-router-dom";

function VideoComponent() {
  return (
    <Link to="/products/10">
    <div className="nike-video-container">
      <video autoPlay loop muted playsInline>
        <source src={NikeVideo} type="video/mp4" />
      </video>
    </div>
    </Link>
  );
}

export default VideoComponent;