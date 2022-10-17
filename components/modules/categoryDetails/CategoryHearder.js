import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../../elements/imageCard";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import styles from "./categoryDetails.module.css";
import CategoryAudio from "./CategoryAudio";
import Video from "../../elements/Video.js";
import Carousel from "../../elements/Carousel";
import Ad from "../../elements/ad";
import CategoryDescription from "./CategoryDescription";
import { categoryDescriptions } from "./helper";
import CategoryLinks from "./CategoryLinks";
import SocialShare from "./SocialShare";
import CategoryComments from "./CategoryComments";
import RelatedNews from "./RelatedNews";
import PostComment from "./PostComment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { NewsFeeds } from "../home/helper";

const CategoryHearder = (props) => {
  const {
    descriptions,
    categoryDisplay,
    StoryImage,
    title,
    commentscount,
    lastupdated,
    photoitems,
  } = props.selectedNews;

  return (
    <Box sx={{ flexGrow: 1, width: "100%", p: 1, mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={6} sm={6} />
        <Grid item xs={12} md={4} lg={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 1,
              p: 1,
              alignItems: "flex-start",
            }}
          >
            <Link href="/">
              <ArrowBackIcon
                sx={{ fontSize: "2.5rem", fontWeight: 600, cursor: "pointer" }}
              />
            </Link>
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: 600, color: "var(--primary)" }}
            >
              {categoryDisplay}
            </Typography>
          </Box>
          <ImageCard
            src={StoryImage}
            alt="Forest"
            category={categoryDisplay}
            imgTitle={title}
            commentscount={commentscount}
            lastupdated={lastupdated}
          />
          <Divider />
          <div className={styles.categoryDescWrap}>
            <CategoryDescription desc={categoryDescriptions[0].desc} />
            <CategoryAudio src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3" />

            <CategoryDescription desc={categoryDescriptions[1].desc} />
            <div className={styles.categoryMediaContainer}>
              <Carousel slidesToShow={1} photoitems={photoitems} />
            </div>

            <CategoryDescription desc={categoryDescriptions[2].desc} />
            <div className={styles.categoryMediaContainer}>
              <Video
                category="World"
                videoTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              />
            </div>

            <CategoryDescription desc={categoryDescriptions[3].desc} />
            <div className={styles.categoryMediaContainer}>
              <Ad />
            </div>
            <CategoryDescription desc={categoryDescriptions[4].desc} />
            <Divider />
            <div className={styles.categoryMediaContainer}>
              <CategoryLinks />
            </div>
            <Divider />
            <div className={styles.categoryMediaContainer}>
              <RelatedNews />
              <Divider />
            </div>

            <div className={styles.categoryMediaContainer}>
              <PostComment />
            </div>
            <div>
              <Typography variant="h5" sx={{ m: 2 }}>
                Comments
              </Typography>
              <CategoryComments />
              <CategoryComments order="row-reverse" />
              <CategoryComments />
              <Divider />
            </div>
            <div className={styles.categoryMediaContainer}>
              <SocialShare />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

CategoryHearder.propTypes = {};

export default CategoryHearder;
