import React from "react";
import PropTypes from "prop-types";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./categoryDetails.module.css";

const SocialShare = ({ socialLinks }) => {
  const { facebook, instagram, twitter, youtube } = socialLinks[0];

  return (
    <div className={styles.socialShareContainer}>
      <a href={facebook} target="_blank">
        <div className={styles.socialShareItem}>
          <FacebookIcon fontSize="large" color="primary" />
        </div>
      </a>
      <a href={instagram} target="_blank">
        <div className={styles.socialShareItem}>
          <InstagramIcon fontSize="large" color="secondary" />
        </div>
      </a>
      <a href={twitter} target="_blank">
        <div className={styles.socialShareItem}>
          <TwitterIcon fontSize="large" sx={{ color: "#2188ed" }} />
        </div>
      </a>

      <a href={youtube} target="_blank">
        <div className={styles.socialShareItem}>
          <YouTubeIcon fontSize="large" color="error" />
        </div>
      </a>
    </div>
  );
};

SocialShare.propTypes = {
  socialLinks: PropTypes.array.isRequired,
};
SocialShare.defaultProps = {
  socialLinks: [
    {
      facebook: "https://www.facebook.com/Dinamalardaily",
      instagram: "https://www.instagram.com/dinamalardaily/",
      twitter: "https://www.dinamalar.com/telegram/?domain=web",
      youtube: "https://www.youtube.com/dinamalardaily",
    },
  ],
};
export default SocialShare;
