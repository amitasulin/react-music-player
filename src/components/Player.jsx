import React, { useState, useRef, useEffect } from "react";
import Music from "../assets/musicback.jpg";
import {
  BiPauseCircle,
  BiPlayCircle,
  BiSkipPreviousCircle,
  BiSkipNextCircle,
} from "react-icons/bi";

export default function Player({
  currentSong,
  currentIndex,
  nextSong,
  prevSong,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);
  return (
    <div>
      <audio ref={audioRef} src={currentSong.music}></audio>
      <div className="player-card">
        <div className="image-container">
          <img className="music-image" src={Music} alt="music" />
        </div>
        {currentSong ? (
          <div>
            <h2 className="activeSong-name">{currentSong.name}</h2>
            <h4 className="activeArtist-name">{currentSong.creator}</h4> <div />
          </div>
        ) : (
          ""
        )}

        <div className="control-icon">
          <BiSkipPreviousCircle
            color="white"
            className="icons"
            size={50}
            onClick={prevSong}
          />
          {isPlaying ? (
            <BiPauseCircle
              color="#ff5722"
              className="icons"
              size={70}
              onClick={togglePlay}
            />
          ) : (
            <BiPlayCircle
              color="#ff5722"
              className="icons"
              size={70}
              onClick={togglePlay}
            />
          )}

          <BiSkipNextCircle
            color="white"
            className="icons"
            size={50}
            onClick={nextSong}
          />
        </div>
      </div>
    </div>
  );
}
