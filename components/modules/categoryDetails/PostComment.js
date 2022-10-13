import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PostComment = (props) => {
  return (
    <div>
      <Typography variant="h5" sx={{ m: 2 }}>
        Post Comment
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: 0.5,
          mb: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          id="name"
          label="Name"
          variant="outlined"
          sx={{ flexBasis: "50%" }}
        />
        <TextField
          size="small"
          id="email"
          label="Email"
          variant="outlined"
          sx={{ flexBasis: "50%" }}
        />
      </Box>
      <TextField
        size="small"
        id="comment"
        label="Comment"
        variant="outlined"
        multiline
        rows={3}
        sx={{ width: "100%", mb: 1 }}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ textAlign: "right" }}>
          Post
        </Button>
      </div>
    </div>
  );
};

PostComment.propTypes = {};

export default PostComment;
