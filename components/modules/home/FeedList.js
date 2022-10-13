import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageCard from "../../elements/imageCard";
import Video from "../../elements/Video.js";
import SampleVideo from "../../elements/Video.js/SampleVideo";
import Audio from "../../elements/audio";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FeedList() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <ImageCard
              src={`https://farm1.staticflickr.com/505/31980127730_ea81689413_m.jpg`}
              alt="Forest"
              category="Nature"
              imgTitle="Fast Company Shuts Down Website After Hackers Compromise Apple News Feed"
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <ImageCard
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg`}
              alt="Forest"
              category="Books"
              imgTitle={`Queen Elizabeth's News Coverage Adding Fuel To "Infobesity": Report`}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <ImageCard
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg`}
              imgTitle={`Facebook News Feed Broken for Hours, Spammed with Bot Posts to Celebrity Pages: Report`}
              alt="Forest"
              category="Temple"
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <ImageCard
              src={`https://farm5.static.flickr.com/4094/4923591327_151f96ea71_m.jpg`}
              imgTitle={`Man Creates Food And Water Dispenser For Stray Dogs`}
              alt="Forest"
              category="World"
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <ImageCard
              src={`https://farm6.static.flickr.com/5007/5250579551_b7f6b8bec6_m.jpg`}
              imgTitle={`Man Creates Food And Water Dispenser For Stray Dogs`}
              alt="Forest"
              category="India"
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <Video
              category="World"
              videoTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Item>
            <Audio />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
