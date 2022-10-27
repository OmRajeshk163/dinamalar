import React from "react";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ReactHlsPlayer = dynamic(() => import("react-hls-player"), {
  ssr: false,
});
const SampleVideo = ({ src }) => {
  return (
    <div>
      <ReactHlsPlayer
        src={src}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
};
//https://www.youtube.com/watch?v=ysz5S6PUM-U

export default SampleVideo;
