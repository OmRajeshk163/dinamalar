import React from "react";
import Image from "next/image";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Divider, Typography } from "@mui/material";
import styles from "./imageCard.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";

const ImageCard = (props) => {
  const { src, alt, imgTitle = "", category = "" } = props;

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
          <Typography align="left" variant="body2" className={styles.imgTitle}>
            {imgTitle}
          </Typography>
          <Divider />
          <Box className={styles.flexbox} sx={{ mt: 2 }}>
            <Box className={styles.flexbox}>
              <AccessTimeIcon color="primary" />
              <Typography sx={{ ml: 1 }}>12:04 PM</Typography>
              <Typography>&nbsp; {`| ${category}`}</Typography>
            </Box>
            <Box className={styles.flexbox}>
              <CommentIcon color="primary" />
              <Typography align="left" variant="body1" sx={{ ml: 1 }}>
                10
              </Typography>
            </Box>
          </Box>
        </ImageListItem>
      </Box>
    </Link>
  );
};

export default ImageCard;
