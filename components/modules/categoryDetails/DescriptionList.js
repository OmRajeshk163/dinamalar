import React, { Fragment } from "react";
import styles from "./categoryDetails.module.css";
import PropTypes from "prop-types";
import CategoryDescription from "./CategoryDescription";
import CategoryAudio from "./CategoryAudio";
import VideoPlayer from "../../elements/Video.js/SampleVideo";
import Carousel from "../../elements/Carousel";
import Ad from "../../elements/ad";
import { Divider } from "@mui/material";

const DescriptionList = ({ description = [] }) => {
  return (
    <Fragment>
      {description?.length > 0 &&
        description.map((desc, index) => {
          if (desc.content != "") {
            return <CategoryDescription desc={desc.content} key={index} />;
          }
          if (desc.audioLink != "") {
            return <CategoryAudio src={desc.audioLink} key={index} />;
          }
          if (desc.videoLink != "") {
            return <VideoPlayer src={desc.videoLink} key={index} />;
          }
          if (desc.photoGallery.length > 0) {
            return (
              <div className={styles.categoryMediaContainer} key={index}>
                <Carousel slidesToShow={1} photoitems={desc.photoGallery} />
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
    </Fragment>
  );
};

DescriptionList.propTypes = {};

export default DescriptionList;
