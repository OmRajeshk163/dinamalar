import React from "react";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import styles from "./audio.module.css";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className={styles.playerButton} onClick={() => handleClick()}>
      <PauseCircleIcon />
    </button>
  );
}
