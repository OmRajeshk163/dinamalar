import React, { useEffect } from "react";
import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import styles from "./audio.module.css";
import useAudioPlayer from "./useAudioPlayer";

function Audio(props) {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer();
  const { src, detailUrl } = props;
  return (
    <div
      className={styles.audioPlayer}
      style={{ backgroundImage: `url(${src})` }}
    >
      <audio id="audio">
        <source
          // src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race2.ogg"
          src="https://imgg.dinamalar.com/audionews/news/Dmr_3154056_16201007.mp3"
        />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song
        songName="Instant Coffee"
        songArtist="Daft Punk ft. Julian Casablancas"
      />
      <div className={styles.audioControls}>
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
      </div>
    </div>
  );
}

export default Audio;
