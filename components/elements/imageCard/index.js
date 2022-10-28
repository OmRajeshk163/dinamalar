import React from "react";
import Image from "next/image";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Divider, Typography } from "@mui/material";
import styles from "./imageCard.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import MicOffIcon from "@mui/icons-material/MicOff";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const ImageCard = (props) => {
  const {
    src,
    alt,
    imgTitle = "",
    category = "",
    commentscount = "",
    lastupdated = "",
    audio,
    videogallery,
    detailUrl,
    feedId,
    isDetailed = false,
  } = props;

  const audioClick = () => {
    console.log();
  };
  return (
    <Box className={isDetailed ? "" : styles.imgContainer}>
      <ImageListItem>
        <div className={styles.imageWrap}>
          <Image
            // loader={myLoader}
            unoptimized={true}
            alt={alt}
            src={src}
            layout="fill"
            objectFit="contain"
            className={styles.image}
          />
        </div>
        <Typography
          align="left"
          variant="h6"
          className={isDetailed ? "" : styles.imgTitle}
        >
          {imgTitle}
        </Typography>

        {videogallery === "1" && (
          <div className={styles.videoIconWrap}>
            <PlayCircleOutlineIcon className={styles.videoIcon} />
          </div>
        )}
        {audio === "1" && (
          <div className={styles.audioIconWrap}>
            <button className={styles.playerButton} onClick={audioClick}>
              <MicOffIcon />
            </button>
          </div>
        )}
        <Divider />
        <Box className={styles.flexbox} sx={{ mt: 2 }}>
          <Box className={styles.flexbox}>
            <AccessTimeIcon color="primary" />
            <Typography sx={{ ml: 1 }} variant="body2">
              {lastupdated}
            </Typography>
            <Typography variant="body2">&nbsp; {`| ${category}`}</Typography>
          </Box>
          <Box className={styles.flexbox}>
            <CommentIcon color="primary" />
            <Typography align="left" variant="body2" sx={{ ml: 1 }}>
              {commentscount}
            </Typography>
          </Box>
        </Box>
      </ImageListItem>
    </Box>
  );
};

export default ImageCard;
