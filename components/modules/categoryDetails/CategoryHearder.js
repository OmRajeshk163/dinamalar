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
import SampleVideo from "../../elements/Video.js/SampleVideo";
import NotFoundImg from "../../../assets/Images/404.jpg";

const CategoryHearder = (props) => {
  const { selectedNews } = props;
  const description = selectedNews?.description ?? [];
  const categoryDisplay = selectedNews?.categoryDisplay ?? ``;
  const StoryImage = selectedNews?.StoryImage ?? NotFoundImg.src;
  const title = selectedNews?.title ?? ``;
  const commentscount = selectedNews?.commentscount ?? ``;
  const lastupdated = selectedNews?.lastupdated ?? ``;
  const relatedLinks = selectedNews?.relatedLinks ?? ``;
  const categoryname = selectedNews?.categoryname;
  const guid = selectedNews?.guid;
  const comments = selectedNews?.comments;
  const socialLinks = selectedNews?.socialLinks;
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
            alt={title}
            category={categoryDisplay}
            imgTitle={title}
            commentscount={commentscount}
            lastupdated={lastupdated}
          />
          <Divider />
          <div className={styles.categoryDescWrap}>
            {description?.length > 0 &&
              description.map((desc, index) => {
                if (desc.content != "") {
                  return (
                    <CategoryDescription desc={desc.content} key={index} />
                  );
                }
                if (desc.audioLink != "") {
                  return <CategoryAudio src={desc.audioLink} key={index} />;
                }
                if (desc.videoLink != "") {
                  return (
                    // <Video
                    //   src={desc.videoLink}
                    //   category="World"
                    //   videoTitle=""
                    // />
                    <SampleVideo src={desc.videoLink} key={index} />
                  );
                }
                if (desc.photoGallery.length > 0) {
                  return (
                    <div className={styles.categoryMediaContainer} key={index}>
                      <Carousel
                        slidesToShow={1}
                        photoitems={desc.photoGallery}
                      />
                    </div>
                  );
                }
                if (desc.adLink != "") {
                  return (
                    <div className={styles.categoryMediaContainer} key={index}>
                      <Ad />
                    </div>
                  );
                }
              })}

            <Divider />
            {/* <div className={styles.categoryMediaContainer}>
              <CategoryLinks />
            </div>
            <Divider /> */}

            <div className={styles.categoryMediaContainer}>
              <RelatedNews relatedLinks={relatedLinks} guid={guid} />
              <Divider />
            </div>

            <div className={styles.categoryMediaContainer}>
              <PostComment categoryname={categoryname} guid={guid} />
            </div>
            <div>
              <Typography variant="h5" sx={{ m: 2 }}>
                Comments
              </Typography>
              {comments?.length > 0 ? (
                comments.map((comment, index) => {
                  if (index % 2 === 0) {
                    return <CategoryComments key={index} {...comment} />;
                  }
                  return (
                    <CategoryComments
                      key={index}
                      order="row-reverse"
                      {...comment}
                    />
                  );
                })
              ) : (
                <Typography sx={{ textAlign: "center", m: 2 }}>
                  No Comments
                </Typography>
              )}
              <Divider />
            </div>
            <div className={styles.categoryMediaContainer}>
              <SocialShare socialLinks={socialLinks} />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

CategoryHearder.propTypes = {};

export default CategoryHearder;
