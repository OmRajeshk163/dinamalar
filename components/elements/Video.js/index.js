import React from "react";
import dynamic from "next/dynamic";
import styles from "./video.module.css";
import { Box, Divider, ImageListItem, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Video = (props) => {
  const { videoTitle = "", category = "" } = props;

  return (
    <div className={styles.videoContainer}>
      <ImageListItem>
        <ReactPlayer
          className={styles.reactPlayer}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          // url="https://vimeo.com/721214409"
          controls={true}
        />
        {videoTitle && (
          <Typography
            align="left"
            variant="body2"
            className={styles.videoTitle}
          >
            {videoTitle}
          </Typography>
        )}
        <Divider />
        <Box className={styles.flexbox} sx={{ mt: 2 }}>
          <Box className={styles.flexbox}>
            <AccessTimeIcon />
            <Typography sx={{ ml: 1 }}>12:04 PM</Typography>
            <Typography>&nbsp; {`| ${category}`}</Typography>
          </Box>
          <Box className={styles.flexbox}>
            <CommentIcon />
            <Typography align="left" variant="body1" sx={{ ml: 1 }}>
              10
            </Typography>
          </Box>
        </Box>
      </ImageListItem>
    </div>
  );
};

export default Video;
