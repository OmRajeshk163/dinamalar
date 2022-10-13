import React from "react";
import PropTypes from "prop-types";
import styles from "./ad.module.css";

const Ad = (props) => {
  return (
    <a href="/" target="_blank">
      <div className={styles.adContainer}>Google Ad</div>
    </a>
  );
};

Ad.propTypes = {};

export default Ad;
