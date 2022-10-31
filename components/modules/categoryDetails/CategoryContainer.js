import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../../elements/imageCard";
import { Box, Divider, Grid, Typography } from "@mui/material";
import styles from "./categoryDetails.module.css";

import SocialShare from "./SocialShare";
import RelatedNews from "./RelatedNews";
import PostComment from "./PostComment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

import NotFoundImg from "../../../assets/Images/404.jpg";
import DescriptionList from "./DescriptionList";
import CommentList from "./CommentList";

const CategoryContainer = (props) => {
  const { selectedNews } = props;
  const {
    guid,
    title,
    commentscount,
    lastupdated,
    description,
    categoryDisplay,
    StoryImage,
    relatedLinks,
    categoryname,
    comments,
    socialLinks,
  } = selectedNews;
  const MediaContainer = ({ children }) => (
    <div className={styles.categoryMediaContainer}>{children}</div>
  );

  return (
    <Box sx={{ flexGrow: 1, width: "100%", p: 1 }}>
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
              <ArrowBackIcon sx={{ fontSize: "2.5rem", fontWeight: 600 }} />
            </Link>
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: 600, color: "var(--primary)" }}
            >
              {categoryDisplay}
            </Typography>
          </Box>
          {StoryImage && (
            <ImageCard
              src={StoryImage}
              alt={title}
              category={categoryDisplay}
              imgTitle={title}
              commentscount={commentscount}
              lastupdated={lastupdated}
              isDetailed={true}
            />
          )}

          <Divider />
          <div className={styles.categoryDescWrap}>
            <DescriptionList description={description} />
            {/* <div className={styles.categoryMediaContainer}>
              <CategoryLinks />
            </div>
            <Divider /> */}
            <MediaContainer>
              <RelatedNews relatedLinks={relatedLinks} />
            </MediaContainer>
            <MediaContainer>
              <PostComment categoryname={categoryname} guid={guid} />
            </MediaContainer>
            <CommentList comments={comments} />
            <MediaContainer>
              <SocialShare socialLinks={socialLinks} />
            </MediaContainer>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

CategoryContainer.propTypes = {};
CategoryContainer.defaultProps = {
  selectedNews: {
    description: [],
    StoryImage: "",
    categoryDisplay: "",
    title: "",
    commentscount: 0,
    lastupdated: "",
    relatedLinks: [],
    categoryname: "",
    guid: 0,
    comments: [],
    socialLinks: [{ facebook: "", instagram: "", twitter: "", youtube: "" }],
  },
};
export default CategoryContainer;
