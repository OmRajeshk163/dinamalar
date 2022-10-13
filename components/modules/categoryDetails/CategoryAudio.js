import React from "react";
import PropTypes from "prop-types";
import styles from "./categoryDetails.module.css";

const CategoryAudio = ({ src = "" }) => {
  return (
    <div className={styles.categoryMediaContainer}>
      <audio className={styles.categoryAudioBox} controls src={src}>
        {/* <a href="/media/cc0-audio/t-rex-roar.mp3">Download audio</a> */}
      </audio>
    </div>
  );
};

CategoryAudio.propTypes = {};

export default CategoryAudio;
