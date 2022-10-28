import React from "react";
import PropTypes from "prop-types";
import { Divider, Typography } from "@mui/material";
import CategoryComments from "./CategoryComments";

const CommentList = ({ comments = [] }) => {
  return (
    <div>
      <Typography variant="h5" sx={{ m: 2 }}>
        Comments
      </Typography>
      {comments?.length > 0 ? (
        comments.map((comment, index) => {
          if (index % 2 === 0) {
            return <CategoryComments key={index} {...comment} />;
          }
          return (
            <CategoryComments key={index} order="row-reverse" {...comment} />
          );
        })
      ) : (
        <Typography sx={{ textAlign: "center", m: 2 }}>No Comments</Typography>
      )}
      <Divider />
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
