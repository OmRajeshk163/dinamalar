import React from "react";
import styles from "./audio.module.css";

function Song(props) {
  const { songName, songArtist } = props;

  return (
    <div className={styles.songContainer}>
      <h1 className={styles.songTitle}>{songName}</h1>
      <h2 className={styles.songArtist}>{songArtist}</h2>
    </div>
  );
}

export default Song;
