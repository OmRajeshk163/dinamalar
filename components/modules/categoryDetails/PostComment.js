import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import styles from "./categoryDetails.module.css";

const PostComment = ({ categoryname, guid }) => {
  const [comment, setComment] = useState({
    yourname: "",
    yourmailid: "",
    Message: "",
  });
  const [error, setError] = useState({
    isNameInvalid: null,
    isMailidInvalid: null,
  });
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const onCommentSubmitHandler = async (e) => {
    e.preventDefault();

    if (guid && categoryname) {
      if (comment.yourname.length === 0) {
        setError((prev) => ({ ...prev, isNameInvalid: true }));
        return;
      } else if (comment.yourname.length !== 0) {
        setError((prev) => ({ ...prev, isNameInvalid: false }));
      }
      if (
        comment.yourmailid.length === 0 ||
        !validateEmail(comment.yourmailid)
      ) {
        setError((prev) => ({ ...prev, isMailidInvalid: true }));
        return;
      } else if (
        comment.yourmailid.length !== 0 ||
        validateEmail(comment.yourmailid)
      ) {
        setError((prev) => ({ ...prev, isMailidInvalid: false }));
      }
      if (comment.yourname && comment.yourmailid) {
        setError((prev) => ({
          ...prev,
          isNameInvalid: false,
          isMailidInvalid: false,
        }));
        const params = { newsid: guid, cat: categoryname, ...comment };
        console.log("submitrequest", params);
        try {
          const commentPostApi = `/api/comments`;
          const postRes = await axios.post(commentPostApi, {
            params,
            timeout: 15000,
          });
          if (
            postRes.data?.item[0]?.success != "0" &&
            postRes.data?.item[0]?.displaymessage
          ) {
            alert(postRes.data.item[0].displaymessage);
            setComment({ yourname: "", yourmailid: "", Message: "" });
          } else {
            alert(postRes.data.item[0].displaymessage);
          }
          console.log("postRespostRes", postRes);
        } catch (err) {
          console.error("postCommenterror", err);
          alert("Comment Submission Failed, Please try Later");
          setComment({ yourname: "", yourmailid: "", Message: "" });
        }
      }
    }
  };
  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Fragment>
      <form onSubmit={onCommentSubmitHandler}>
        <Typography variant="h5" sx={{ m: 2 }}>
          Post Comment
        </Typography>

        <Box
          sx={{ display: "flex", gap: 0.5, mb: 1 }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              size="small"
              id="name"
              label="Name"
              variant="outlined"
              name="yourname"
              value={comment.yourname}
              onChange={onInputChangeHandler}
              sx={{ flexBasis: "50%" }}
              required
              error={error.isNameInvalid}
              helperText={error.isNameInvalid ? "Incorrect entry." : ""}
            />
          </div>
          <div>
            <TextField
              size="small"
              id="email"
              label="Email"
              variant="outlined"
              name="yourmailid"
              value={comment.yourmailid}
              onChange={onInputChangeHandler}
              sx={{ flexBasis: "50%" }}
              type="email"
              required
              error={error.isMailidInvalid}
              helperText={error.isMailidInvalid ? "Invalid Email ID." : ""}
            />
          </div>
        </Box>
        <div>
          <TextField
            size="small"
            id="comment"
            label="Comment"
            variant="outlined"
            multiline
            rows={3}
            name="Message"
            required
            value={comment.Message}
            onChange={onInputChangeHandler}
            sx={{ width: "100%", mb: 1 }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ textAlign: "right" }} type="submit">
            Post
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

PostComment.propTypes = {};

export default PostComment;
