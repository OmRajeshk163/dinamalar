import React from "react";
import PropTypes from "prop-types";
import styles from "./categoryDetails.module.css";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "../../../assets/Images/404.jpg";

const RelatedNews = (props) => {
  const mySliderImgLoader = (src) => src;

  const { relatedLinks, guid } = props;
  return (
    <div className={styles.categoryRelatedNewsContainer}>
      <Typography variant="h5" sx={{ m: 2 }}>
        Related News
      </Typography>
      {relatedLinks?.length > 0 &&
        relatedLinks.map((link, index) => (
          <Link key={index} href={`/category-details/${link.guid}`}>
            <div className={styles.relatedNewsWrap}>
              <div
                style={{
                  height: "5rem",
                  width: "100%",
                  flexBasis: "40%",
                  position: "relative",
                }}
              >
                <Image
                  // loader={() =>
                  //   mySliderImgLoader(
                  //     link.StoryImage != "" ? link.StoryImage : NotFoundImg.src
                  //   )
                  // }
                  unoptimized={true}
                  alt={link.title}
                  src={
                    link.StoryImage != "" ? link.StoryImage : NotFoundImg.src
                  }
                  // style={{
                  //   objectFit: "fill !important",
                  //   width: "100%",
                  //   height: "100%",
                  // }}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.relatedNewsText}>
                <Typography>{link.title}</Typography>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

RelatedNews.propTypes = {};

export default RelatedNews;
