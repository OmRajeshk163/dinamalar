import React, { useState } from "react";
import Image from "next/image";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Divider, Typography } from "@mui/material";
import styles from "./imageCard.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";
import Audio from "../audio";
import MicOffIcon from "@mui/icons-material/MicOff";
import axios from "axios";

const ImageCard = (props) => {
  const {
    src,
    alt,
    imgTitle = "",
    category = "",
    commentscount = "",
    lastupdated = "",
    audio,
    detailUrl,
    feedId,
  } = props;
  const [mp3src, setmp3Src] = useState("");
  const myLoader = () => src;
  // const audioOnclickHandler = async () => {
  //   const detailedFeed = await axios.get(detailUrl).data;
  //   const getmp3url = detailedFeed.data.item.description.filter(
  //     (desc) => desc.audioLink != ""
  //   )[0].audioLink;
  //   const feedmp3 = await axios.get(getmp3url);
  // };

  const audioClick = () => {
    console.log();
  };
  return (
    <Box className={styles.imgContainer}>
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
        <Typography align="left" variant="h6" className={styles.imgTitle}>
          {imgTitle}
        </Typography>
        {/* <audio id="audio">
          <source
            // src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race2.ogg"
            src={mp3src}
          />
          Your browser does not support the <code>audio</code> element.
        </audio> */}
        {audio === "1" && (
          <div
            style={{
              position: "absolute",
              bottom: "30%",
              right: "5%",
              zIndex: "999",
            }}
          >
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
