import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, Typography } from "@mui/material";

const CategoryDescription = ({ desc = "" }) => {
  return (
    <Fragment>
      <Typography sx={{ mb: 1 }}>{desc}</Typography>
    </Fragment>
  );
};

CategoryDescription.propTypes = {};

export default CategoryDescription;
