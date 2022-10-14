import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import styles from "./audio.module.css";
import MicOffIcon from "@mui/icons-material/MicOff";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className={styles.playerButton} onClick={() => handleClick()}>
      <MicOffIcon />
    </button>
  );
}
