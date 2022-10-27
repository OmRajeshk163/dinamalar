import React from "react";
import PropTypes from "prop-types";
import styles from "./categoryDetails.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";

const CategoryComments = ({ order = "row", comment, name }) => {
  return (
    <div className={styles.categoryCommentsContainer}>
      <div className={styles.commentWrap} style={{ flexDirection: order }}>
        <div className={styles.commentAvatar}>
          <AccountCircleIcon fontSize="large" color="primary" />
        </div>
        <div
          className={styles.commentText}
          style={{ textAlign: order == "row" ? "left" : "right" }}
        >
          <Typography variant="h5">{name}</Typography>
          <Typography>{comment}</Typography>
        </div>
      </div>
    </div>
  );
};

CategoryComments.propTypes = {};

export default CategoryComments;
