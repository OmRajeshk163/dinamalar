import { Typography } from "@mui/material";
import React from "react";

const SampleVideo = () => {
  return (
    <div>
      <iframe
        width="420"
        height="300"
        src="//www.youtube.com/watch?v=ysz5S6PUM-U"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Typography>Custom Player</Typography>
    </div>
  );
};
//https://www.youtube.com/watch?v=ysz5S6PUM-U

export default SampleVideo;
