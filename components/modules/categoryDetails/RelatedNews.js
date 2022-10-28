import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./categoryDetails.module.css";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "../../../assets/Images/404.jpg";

const RelatedNews = (props) => {
  const { relatedLinks } = props;
  return (
    <Fragment>
      <div className={styles.categoryRelatedNewsContainer}>
        <Typography variant="h5" sx={{ m: 2 }}>
          Related News
        </Typography>
        {relatedLinks?.length > 0 ? (
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
                    unoptimized={true}
                    alt={link.title}
                    src={
                      link.StoryImage != "" ? link.StoryImage : NotFoundImg.src
                    }
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.relatedNewsText}>
                  <Typography>{link.title}</Typography>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <Typography sx={{ textAlign: "center", m: 2 }}>
            Related News
          </Typography>
        )}
      </div>
      <Divider />
    </Fragment>
  );
};

RelatedNews.propTypes = { relatedLinks: PropTypes.array.isRequired };

export default RelatedNews;
