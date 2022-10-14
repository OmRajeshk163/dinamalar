import React from "react";
import PropTypes from "prop-types";
import styles from "./categoryDetails.module.css";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Typography } from "@mui/material";

const RelatedNews = (props) => {
  return (
    <div className={styles.categoryRelatedNewsContainer}>
      <Typography variant="h5" sx={{ m: 2 }}>
        Related News
      </Typography>
      <div className={styles.relatedNewsWrap}>
        <div className={styles.relatedNewsImg}>
          <NewspaperIcon fontSize="large" color="primary" />
        </div>
        <div className={styles.relatedNewsText}>
          <Typography>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </Typography>
        </div>
      </div>
      <div className={styles.relatedNewsWrap}>
        <div className={styles.relatedNewsImg}>
          <NewspaperIcon fontSize="large" color="primary" />
        </div>
        <div className={styles.relatedNewsText}>
          <Typography>
            Classical Latin literature from 45 BC, making it over 2000 years
            old.
          </Typography>
        </div>
      </div>
      <div className={styles.relatedNewsWrap}>
        <div className={styles.relatedNewsImg}>
          <NewspaperIcon fontSize="large" color="primary" />
        </div>
        <div className={styles.relatedNewsText}>
          <Typography>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Typography>
        </div>
      </div>
      <div className={styles.relatedNewsWrap}>
        <div className={styles.relatedNewsImg}>
          <NewspaperIcon fontSize="large" color="primary" />
        </div>
        <div className={styles.relatedNewsText}>
          <Typography>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </Typography>
        </div>
      </div>
    </div>
  );
};

RelatedNews.propTypes = {};

export default RelatedNews;
