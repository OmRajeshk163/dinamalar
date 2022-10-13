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
          <NewspaperIcon fontSize="large" />
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
          <NewspaperIcon fontSize="large" />
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
          <NewspaperIcon fontSize="large" />
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
          <NewspaperIcon fontSize="large" />
        </div>
        <div className={styles.relatedNewsText}>
          <Typography>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </Typography>
        </div>
      </div>
    </div>
  );
};

RelatedNews.propTypes = {};

export default RelatedNews;
