import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageCard from "../../elements/imageCard";
import Video from "../../elements/Video.js";
import Audio from "../../elements/audio";
import Link from "next/link";
import axios from "axios";
import { Typography } from "@mui/material";
import { NewsFeeds } from "./helper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FeedList() {
  const [state, setState] = useState([]);

  function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = { text: str.substr(o, size), id: i };
    }

    return chunks;
  }

  useEffect(() => {
    const newsFeedsAPi = "/api/newsFeeds";
    axios.get(newsFeedsAPi).then((response) => {
      console.log("resxdsdreseerror", response);
      setState(response.data.items);
    });
  }, []);
  console.log("stateres", state);
  return (
    <Box sx={{ flexGrow: 1, width: "100%", mt: 5, cursor: "pointer" }}>
      <Grid container spacing={2}>
        {state.map((feed, index) => (
          <Grid item xs={12} md={4} lg={4} key={index}>
            <Item>
              {/* {feed.audio == "1" ? (
                <Audio src={feed.StoryImage} />
              ) : (
                <ImageCard
                  src={feed.StoryImage}
                  alt={feed.title}
                  category={feed.categoryDisplay}
                  imgTitle={feed.title}
                  commentscount={feed.commentscount}
                  lastupdated={feed.lastupdated}
                  audio={feed.audio}
                />
              )} */}
              <ImageCard
                src={feed.StoryImage}
                alt={feed.title}
                category={feed.categoryDisplay}
                imgTitle={feed.title}
                commentscount={feed.commentscount}
                lastupdated={feed.lastupdated}
                audio={feed.audio}
              />
            </Item>
          </Grid>
        ))}

        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <Video
              category="World"
              videoTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
          </Item>
        </Grid>
        {/* <Grid item xs={12} md={4} lg={4}>
          <Item>
            <Audio />
          </Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
