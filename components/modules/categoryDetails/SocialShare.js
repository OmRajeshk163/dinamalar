import React from "react";
import PropTypes from "prop-types";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./categoryDetails.module.css";

const SocialShare = (props) => {
  return (
    <div className={styles.socialShareContainer}>
      <div className={styles.socialShareItem}>
        <InstagramIcon fontSize="large" />
      </div>
      <div className={styles.socialShareItem}>
        <FacebookIcon fontSize="large" />
      </div>
      <div className={styles.socialShareItem}>
        <TwitterIcon fontSize="large" />
      </div>
      <div className={styles.socialShareItem}>
        <YouTubeIcon fontSize="large" />
      </div>
    </div>
  );
};

SocialShare.propTypes = {};

export default SocialShare;
