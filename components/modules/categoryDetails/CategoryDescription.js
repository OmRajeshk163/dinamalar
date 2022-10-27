import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, Typography } from "@mui/material";

const CategoryDescription = ({ desc = "" }) => {
  const description = desc.replace(/<\/?[^>]+(>|$)/g, "\n");
  return (
    <Fragment>
      <Typography sx={{ mb: 1 }}>{description}</Typography>
    </Fragment>
  );
};

CategoryDescription.propTypes = { desc: PropTypes.string.isRequired };

export default CategoryDescription;
