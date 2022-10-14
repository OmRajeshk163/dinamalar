import React from "react";
import PropTypes from "prop-types";
import styles from "./categoryDetails.module.css";
import { Link, Typography } from "@mui/material";

const CategoryLinks = (props) => {
  return (
    <div>
      <Typography variant="h5" sx={{ m: 2 }}>
        Related Links
      </Typography>
      <ul style={{ padding: 2 }}>
        <li className={styles.categoryLinkWrap}>
          <Link href="/" rel="noopener" target="_blank">
            What is Lorem Ipsum Neque sam quisquam est qui dolorem ipsum?
          </Link>
        </li>
        <li className={styles.categoryLinkWrap}>
          <Link href="/" rel="noopener" target="_blank">
            quia dolor sit amet, consectetur, adipisci velit... Where does it
            come from?
          </Link>
          <a href="/" target="_blank" className={styles.categoryLink}></a>
        </li>
        <li className={styles.categoryLinkWrap}>
          <Link href="/" rel="noopener" target="_blank">
            Where can I get some? There is no one who loves pain itself, who
            seeks
          </Link>
        </li>
        <li className={styles.categoryLinkWrap}>
          <Link href="/" rel="noopener" target="_blank">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </Link>
        </li>
      </ul>
    </div>
  );
};

CategoryLinks.propTypes = {};

export default CategoryLinks;
