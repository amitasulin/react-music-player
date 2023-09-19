import { useState } from "react";
import "./App.css";
import AudioFiles from "./components/AudioFiles.jsx";
import { audios } from "./audioData";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const getSongData = (song, index) => {
    setCurrentSong(song);
    setCurrentIndex(index);
  };

  const nextSong = () => {
    setCurrentIndex(currentIndex + 1);
    setCurrentSong(audios[currentIndex + 1]);
  };

  const prevSong = () => {
    setCurrentIndex(currentIndex - 1);
    setCurrentSong(audios[currentIndex - 1]);
  };
  return (
    <>
      <div className="player-main">
        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
          nextSong={nextSong}
          prevSong={prevSong}
        />
      </div>
    </>
  );
}

export default App;
