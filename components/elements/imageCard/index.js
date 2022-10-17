import React from "react";
import Image from "next/image";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Divider, Typography } from "@mui/material";
import styles from "./imageCard.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";
import Audio from "../audio";
import MicOffIcon from "@mui/icons-material/MicOff";

const ImageCard = (props) => {
  const {
    src,
    alt,
    imgTitle = "",
    category = "",
    commentscount = "",
    lastupdated = "",
    audio,
  } = props;

  const myLoader = () => {
    return src;
  };

  return (
    <Link href={"/category-details"}>
      <Box className={styles.imgContainer}>
        <ImageListItem>
          <div className={styles.imageWrap}>
            <Image
              loader={myLoader}
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
          {audio === "1" && (
            <div style={{ position: "absolute", bottom: "30%", right: "5%" }}>
              <button
                className={styles.playerButton}
                onClick={() => console.log()}
              >
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
    </Link>
  );
};

export default ImageCard;
