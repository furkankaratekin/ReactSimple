import { useState } from "react";
import Menu from "./Menu";
import Video from "./Video";
import "./App.css";

const videos = {
  bmw: "file:///C:/Users/ASUS/Downloads/BMW%20DRİFT%20DERLEME%20-%20Türkiye%20Yanlama%20Videoları%20-%20Bmw%20Türkiye%20DRİFT%20Videoları%20%231.mp4",
};

const videoNames = Object.keys(videos);

export default function App() {
  const [videoSrc, setVideoSrc] = useState(videos.spider);

  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div>
      <h1>Project 6: Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}
